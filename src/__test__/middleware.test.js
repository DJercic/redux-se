import {applyMiddleware, createStore, compose} from 'redux';
import createMiddleware from './../middleware';
import {effect} from '../effects';

describe('middleware tests', () => {

  let sideEffectQueue;
  let middleware;

  beforeEach(() => {
    sideEffectQueue = [];
    middleware = createMiddleware(sideEffectQueue);
  });

  afterEach(() => {
    sideEffectQueue = null;
    middleware = null;
  });

  test('is middleware is a function', () => {
    expect(typeof middleware).toBe(typeof function () {});
  });
});

describe('Integration with redux', () => {
  let sideEffectQueue;
  let middleware;

  let store;
  const reducers = (state) => state;
  const enhancer = compose(
    applyMiddleware(createMiddleware(sideEffectQueue))
  );

  beforeEach(() => {
    sideEffectQueue = [];
    middleware = createMiddleware(sideEffectQueue);

    store = createStore(reducers, {}, enhancer);
  });

  afterEach(() => {
    sideEffectQueue = null;
    middleware = null;
    store = null;
  });

  test('Is side effect handler running', () => {
    const handler = (dispatch, action) => {
      expect(action).toHaveProperty('type', 'API_CALL');
    };

    const sideEffect = effect('API_CALL', handler);
    sideEffectQueue.push(sideEffect);
    store.dispatch({type: 'API_CALL'});
  });
});