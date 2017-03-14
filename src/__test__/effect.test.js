import {effect} from '../effects';

describe('Test effects helper functions', () => {

  test('is creating a action with type and handler', () => {

    const apiCallHandler = () => {};

    const createdEffect = effect('API_CALL', apiCallHandler);
    expect(createdEffect).toHaveProperty('type', 'API_CALL');
    expect(createdEffect).toHaveProperty('handler', apiCallHandler);
  });

});

