import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.15.7:0',
  releaseNotes: {
    en_US:
      "Blake2b ASIC Control 1.15.7: best share and record shown on the same scale as DATUM and mempool (the miner counts in units of 2^32 hashes), with a choice under Settings to show the miner's own numbers or both (shown on two lined-up lines on the Fleet card); the page no longer jumps when the Fleet cards refresh; the restart bar no longer flickers. The README now has screenshots.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
