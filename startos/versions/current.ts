import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.15.4:0',
  releaseNotes: {
    en_US:
      'Blake2b ASIC Control 1.15.4: the restart bar and Restart button on the Fleet cards no longer flicker while a miner restarts.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
