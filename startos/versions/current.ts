import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.15.3:0',
  releaseNotes: {
    en_US:
      'First StartOS release of Blake2b ASIC Control 1.15.3: fleet dashboard, presets with fan curves, weekly schedule, Telegram and Discord alerts, best and rejected shares, 24-hour hashrate graphs, and the SC Lite auto-tuner.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
