import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.16.0:0',
  releaseNotes: {
    en_US:
      'Blake2b ASIC Control 1.16.0: a fan target for the SC Box and HS Box. Their firmware ignores fan numbers and holds the control board at a target temperature; the Miner page now sets that target for these two models only (SC Box 65-75 C, HS Box 70-80 C), writing nothing else. Lower is cooler and louder, higher is quieter and warmer.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
