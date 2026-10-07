import { i18n } from './i18n'
import { sdk } from './sdk'
import { appOwner, dataDir, uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Blake2b ASIC Control'))

  const appSub = sdk.SubContainer.of(
    effects,
    { imageId: 'app' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: dataDir,
      readonly: false,
    }),
    'app-sub',
  )

  return sdk.Daemons.of(effects)
    .addOneshot('chown', {
      subcontainer: appSub,
      exec: {
        command: ['chown', '-R', appOwner, dataDir],
        user: 'root',
      },
      requires: [],
    })
    .addDaemon('primary', {
      subcontainer: appSub,
      exec: {
        command: ['/app/entrypoint.sh'],
        env: {
          SCLITE_WEBUI_HOST: '0.0.0.0',
          SCLITE_WEBUI_PORT: String(uiPort),
          SCLITE_WEBUI_MINERS: `${dataDir}/miners.json`,
          SCLITE_TUNER_DATA: `${dataDir}/tuner`,
          B2AC_PLATFORM: 'startos',
          TZ: 'UTC',
        },
        // on stop, a running tuning run puts the miner back on its best setting first (up to 30 s)
        sigtermTimeout: 60_000,
      },
      ready: {
        display: i18n('Web Interface'),
        gracePeriod: 30_000,
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, uiPort, {
            successMessage: i18n('The web interface is ready'),
            errorMessage: i18n('The web interface is not ready'),
          }),
      },
      requires: ['chown'],
    })
})
