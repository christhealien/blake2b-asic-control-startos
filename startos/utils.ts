// Constants shared across the package.

/** The port the dashboard listens on inside the container. */
export const uiPort = 8787

/** Where the app keeps everything it writes (miners.json, auth.json, the tuner's files...). */
export const dataDir = '/data'

/** The login the "Set login password" action creates. */
export const loginUser = 'admin'

/** The app image runs as this user; StartOS mounts volumes owned by root. */
export const appOwner = '1000:1000'
