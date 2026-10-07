import { utils } from '@start9labs/start-sdk'
import { authJson } from '../fileModels/auth.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { appOwner, dataDir, loginUser } from '../utils'

export const setLoginPassword = sdk.Action.withoutInput(
  'set-login-password',

  async ({ effects }) => ({
    name: i18n('Set Login Password'),
    description: i18n(
      'Generate a new random password for the login (username admin). Runs while the service is stopped; the app uses the new password when it starts, and everyone signed in is signed out.',
    ),
    warning: (await authJson.read((a) => a.username).const(effects))
      ? i18n('Replaces the current login password.')
      : null,
    allowedStatuses: 'only-stopped',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const password = utils.getDefaultString({
      charset: 'a-z,A-Z,0-9',
      len: 24,
    })

    // The app sets its own login (only the salted hash is written); the
    // password goes in on stdin, never as an argument.
    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'app' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: dataDir,
        readonly: false,
      }),
      'set-login',
      async (sub) => {
        await sub.execFail(
          ['python', 'auth_addon.py', 'set-login', loginUser],
          {
            input: password,
            cwd: '/app/webui',
            user: 'root',
            env: { SCLITE_WEBUI_MINERS: `${dataDir}/miners.json` },
          },
        )
        await sub.execFail(['chown', '-R', appOwner, dataDir], {
          user: 'root',
        })
      },
    )

    return {
      version: '1',
      title: i18n('Blake2b ASIC Control Login'),
      message: i18n(
        'Sign in with this username and password. You can change the password afterwards under Settings → Account in the app.',
      ),
      result: {
        type: 'group',
        value: [
          {
            type: 'single',
            name: i18n('Username'),
            description: null,
            value: loginUser,
            masked: false,
            copyable: true,
            qr: false,
          },
          {
            type: 'single',
            name: i18n('Password'),
            description: null,
            value: password,
            masked: true,
            copyable: true,
            qr: false,
          },
        ],
      },
    }
  },
)
