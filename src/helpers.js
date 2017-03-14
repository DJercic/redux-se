export function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

export function isFunction(fn) {
  return !!fn && (typeof fn === 'function');
}

export function isString(value) {
  return !!value && (typeof value === 'string');
}

export function delay(miliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, miliseconds);
    })
}