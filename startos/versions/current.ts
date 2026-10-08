import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.15.9:0',
  releaseNotes: {
    en_US:
      'Blake2b ASIC Control 1.15.9: efficiency is now shown in J/TH (the same number as W/TH). From 1.15.8: auto fan control now leaves SC Box and HS Box miners to their own firmware fan control (their fan settings do not hold, and each write set off a long fan spike). The rest of this release redesigns the Umbrel home-screen widgets, which StartOS does not use.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
