import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.16.1:0',
  releaseNotes: {
    en_US:
      'Blake2b ASIC Control 1.16.1: a full bug sweep. Tuning runs always put the miner back on what it really ran before, and stop properly when the service stops or crashes (the stop timeout is now 120 s for that); hashrate graphs show clock times in your time zone; daylight-saving changes no longer re-apply schedule presets; notifications no longer stop after Idle; best-share history survives a power cut; reports also remove IPv6 and pool host:port addresses; and many smaller fixes.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
