import {RESOLVE_PROP, REJECT_PROP} from './constants';
import {isPromise, isFunction} from './helpers';

export default function createMiddleware(queue = []) {

  return function ({dispatch}) {
    return (next) => (action) => {

      next(action);
      const effect = queue.find((effect) => effect.type === action.type);

      if (effect) {
        const {handler} = effect;
        const result = handler(dispatch, action);

        if (isPromise(result)) {

          if (actionContainsPromise(action)) {
            result.then(getResolveFn(action))
              .catch(getRejectFn(action));
          }
        } else if (actionContainsPromise(action)) {

          const resolve = action[RESOLVE_PROP];
          resolve();
        }
      }
    };
  };
}

function getRejectFn(action) {
  return action[REJECT_PROP];
}

function getResolveFn(action) {
  return action[RESOLVE_PROP];
}

function actionContainsPromise(action) {
  return  (isFunction(getResolveFn(action)) && isFunction(getRejectFn(action)));
}
