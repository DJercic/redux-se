import {REJECT_PROP, RESOLVE_PROP} from './constants';

export default function dispatchPromise(dispatch, action) {
  return new Promise((resolve, reject) => {
    const promiseObject = {[RESOLVE_PROP]: resolve, [REJECT_PROP]: reject};
    dispatch(Object.assign(action, promiseObject));
  });
}
