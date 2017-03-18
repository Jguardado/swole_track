import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { App } from './src/app';
import root from './src/reducers/root.reducer';
import { mockResponse } from "./data/mock-response";

console.log("mock res: ", mockResponse);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(root, mockResponse, composeEnhancers(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
