import {effect} from '../../src/effects';
import {delay as delayPromise} from '../../src/helpers';

export const simulateApiCall = effect('DELAY', (dispatch, action) => {
  const {delay = 100} = action;
  return delayPromise(delay)
    .then(() => dispatch({type: 'DELAY_SUCCESS'}));
});