# Blake2b ASIC Control

## Documentation

- [Blake2b ASIC Control README](https://github.com/christhealien/blake2b-asic-control/blob/master/README.md) — what the dashboard does, the supported models, and security advice for miners
- [Changelog](https://github.com/christhealien/blake2b-asic-control/blob/master/CHANGELOG.md) — every version in detail

## What you get on StartOS

- **The Blake2b ASIC Control dashboard** as the **Web UI** interface: your whole fleet, each miner's chips, presets, fan curves, the weekly schedule, notifications and the tuner.
- **A login only you can create:** the service won't start until you've run **Set Login Password**, which makes a random password and shows it to you once.
- **Backups** of everything the app keeps: your miners, presets, schedules, settings, share and hashrate history, and the tuner's results.

## Getting set up

1. Run the **Set Login Password** task that StartOS shows after install. Copy the username (`admin`) and the password it shows you.
2. Start the service.
3. Open the **Web UI** interface and sign in with that username and password. Read and acknowledge the disclaimer.
4. Go to **Settings → Time zone** and pick yours, so schedules, restarts and logs use your local time.
5. Go to **Settings → Add miner** and enter each miner's IP address and its admin password. Each one is detected within a minute and shows up on the **Fleet** page.

Your miners must be on a network your StartOS server can reach. Keep them on a trusted local network: their own web pages have no real security.

## Using it

- **Fleet:** every miner with its hashrate, temperatures, fans, a 24-hour hashrate graph, best share and rejected shares; tick miners to apply a preset, pause the schedule or restart them.
- **Profiles:** presets (clock, voltage, PV and their own fan curve), the shared fan curves, and **Download report**: a read-only zip, with nothing private in it, to send in when you have a model or firmware the app hasn't been tested on.
- **Schedule:** paint a week of presets in half-hour blocks, add scheduled restarts, and copy one miner's week to others.
- **Tuner** (SC Lite): maps every clock from underclock to overclock, finds the lowest clean voltage at each, and builds High, Middle, Low and Lowest-power presets.
- **Settings:** miners, notifications (Telegram or Discord), time zone, **Best share numbers** (on the same scale as DATUM and mempool, the miner's own numbers, or both), and **Account** to change your username or password.

To replace a lost password, stop the service, run **Set Login Password** again (everyone is signed out), and start it.

## Limitations

- Overclocking and changing voltage can damage hardware; the tuner and presets stay inside the limits the app checks, but you use them at your own risk.
