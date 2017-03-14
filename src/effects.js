import {isFunction, isString} from './helpers';

export function effect(type, handler) {
  if (!isString(type)) {
    throw new Error(`type must be a function`);
  }
  if (!isFunction(handler)) {
    throw new Error(`handler must be a function.`);
  }
  return {type, handler};
}
