import {applyMiddleware, createStore, compose} from 'redux';
import createMiddleware from './../../src/middleware';
import {simulateApiCall} from './effects';

const sideEffectsQueue = [simulateApiCall];

const middleware = createMiddleware(sideEffectsQueue);
const enhancer = compose(
  applyMiddleware(middleware)
);

let store = createStore((state) => state, {}, enhancer);
console.log(store);
window.store = store;

export default store;
