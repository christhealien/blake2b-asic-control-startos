import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

/**
 * The app's own login file. The app writes it (a username and a salted PBKDF2
 * hash, never the password); the package only reads whether a login exists.
 */
export const authJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: 'auth.json' },
  z.object({
    username: z.string().optional().catch(undefined),
  }),
)
