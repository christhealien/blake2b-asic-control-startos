import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.19.0:0',
  releaseNotes: {
    en_US:
      "Blake2b ASIC Control 1.19.0: a clearer Pools page (tick the miners on the page itself, see each one's pools and the one it mines on, switch or remove a pool per miner, add a pool to all ticked miners keeping each worker name, or switch them all to one pool). From 1.18.2: on the Miner page, rejected shares now sit with the 24-hour hashrate graph instead of the best share, on the same 24 hours, size and time axis as the graph. From 1.18.0: power estimates for the SC Box and HS Box (from a tester's wall-meter readings; power follows the clock), a firmware check on the Miner page that says when the maker lists newer firmware (the app never installs any), and a tuner files download with private details taken out for sending. From 1.17.0: clock control for the SC Box and HS Box. Their Miner page has a clock box, Profiles makes four clock presets from the clock the box runs now (High, then 25, 50 and 75 MHz lower), schedules can use them, and the Tuner page has a clock tuner for them: it learns every chip's normal error rate, steps the clock up 25 MHz at a time until a step isn't clean, confirms the fastest clean clock, then builds and tests the four presets. Only the clock changes (in testing a lower voltage made no measurable difference in power), nothing is set above stock, and stopping a run puts back exactly what the miner ran before. The chip list on these boxes now reads their chip data. From 1.16.3: going back to a miner's stock plan writes the plan so it really runs again.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
