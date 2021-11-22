import { check, Match } from 'meteor/check'
import { warn } from '../utils/console'

/**
 * Used to register handlers for different instances that validate users.
 * This allows you to validate user access on a
 */
export const UserValidation = {}

const validationHandlers = new WeakMap()

UserValidation.register = function (instance, validationHandler) {
  check(instance, Match.ObjectIncluding({ instanceId: String }))
  check(validationHandler, Function)

  validationHandlers.set(instance, validationHandler)
}

UserValidation.isValid = function (instance = {}, user) {
  // we assume, that if there is no validation handler registered
  // then the developers intended to do so. However, we will print an info.
  if (!validationHandlers.has(instance)) {
    if (instance.debug) {
      warn(`skip user validation, no handler found for instance ${instance.instanceId}`)
    }

    return true
  }

  const validationHandler = validationHandlers.get(instance)

  return validationHandler(user)
}