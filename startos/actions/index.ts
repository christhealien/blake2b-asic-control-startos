import { sdk } from '../sdk'
import { setLoginPassword } from './setLoginPassword'

export const actions = sdk.Actions.of().addAction(setLoginPassword)
