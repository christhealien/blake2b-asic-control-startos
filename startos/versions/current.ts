import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.15.5:0',
  releaseNotes: {
    en_US:
      'Blake2b ASIC Control 1.15.5: best share and record are shown on the same scale as DATUM and mempool (the miner counts in units of 2^32 hashes), the page no longer jumps when the Fleet cards refresh, and the restart bar no longer flickers.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
