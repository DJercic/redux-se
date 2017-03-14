# redux-se
Redux middleware that allows you to trigger side effects with redux actions

The biggest problem I have with redux-thunk is that the side effects are not registered in redux flow.
The biggest problem I have with redux-saga is that it's to complex for simple api calls that the average application needs.

redux-se is a library that meets in the middle. Side effects are triggered by actions that flow through redux store,
and complexity of your side-effects are up to you.

# Install

npm install --save redux-se

# Use

Create effects.js file.

`import {effect} from 'redux-se/effects';`

`export const apiEffect = effect('API_CALL', (dispatch, action) => {
    return somethingAsync()
    .then(() => dispatch('API_CALL_SUCCESS'))
    .catch(() => dispatch('API_CALL_ERROR'))
});`

in store definition file:

`import {applyMiddleware, createStore, compose} from 'redux';`

`import createMiddleware from 'redux-se';`

`import {apiEffect} from './effects';`

`const sideEffectsQueue = [apiEffect];` // register all side effects in queue (a simple array)

`const middleware = createMiddleware(sideEffectsQueue);` // create a middleware that has a reference to the queue

// create enhancers

`const enhancer = compose(
     applyMiddleware(createMiddleware(sideEffectQueue)),
     ...
   );`

`const store = createStore(reducers, initialState, enhancer);`

`store.dispatch({type: 'API_CALL', body: {}, query: {}, param1: {}});`

# API

`const promise = dispatchPromise(dispatch, action);`
