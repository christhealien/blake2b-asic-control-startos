import { setLoginPassword } from '../actions/setLoginPassword'
import { authJson } from '../fileModels/auth.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

// No login yet (a fresh install): hold the service until the user sets one, so
// nobody else on the network can create the first account.
export const watchLogin = sdk.setupOnInit(async (effects) => {
  const auth = await authJson.read().const(effects)

  if (!auth?.username) {
    await sdk.action.createOwnTask(effects, setLoginPassword, 'critical', {
      reason: i18n('Set the login password before signing in'),
    })
  }
})
