import dispatchPromise from '../src/dispatchPromise';
import {RESOLVE_PROP, REJECT_PROP} from '../src/constants';

describe('Test dispatchPromise', () => {

  test('is creating a action with promise attributes', () => {

    const dispatch = (action) => {
      expect(action).toHaveProperty(RESOLVE_PROP);
      expect(action).toHaveProperty(REJECT_PROP);
    };
    const data = {body: {}, query: {}};
    const action = {type: 'API_CALL', data};

    dispatchPromise(dispatch, action);
  });

});


