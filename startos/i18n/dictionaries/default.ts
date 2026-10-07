export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Blake2b ASIC Control': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The Blake2b ASIC Control dashboard': 5,

  // actions/setLoginPassword.ts
  'Set Login Password': 6,
  'Generate a new random password for the login (username admin). Runs while the service is stopped; the app uses the new password when it starts, and everyone signed in is signed out.': 7,
  'Replaces the current login password.': 8,
  'Blake2b ASIC Control Login': 9,
  'Sign in with this username and password. You can change the password afterwards under Settings → Account in the app.': 10,
  Username: 11,
  Password: 12,

  // init/watchLogin.ts
  'Set the login password before signing in': 13,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
