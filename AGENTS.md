# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>).

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

## This repo

- **The image is the upstream app's own** (`ghcr.io/christhealien/blake2b-asic-control`), the same one its Umbrel app runs. Don't build a separate image here; change the app upstream and bump the pin (`UPDATING.md`).
- **The package never writes `auth.json`.** The login is set by the app itself (`python auth_addon.py set-login admin`, password on stdin), which stores only a salted PBKDF2 hash. Don't store the generated password in a store file.
- **Keep `allowedStatuses: 'only-stopped'` on Set Login Password.** The running app holds sessions in memory; the action empties `sessions.json`, which only signs everyone out once the app starts again.
- **The `chown` oneshot is required.** The app runs as `1000:1000`; StartOS mounts the volume owned by root on every start.
