import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';

import App from './App.jsx';
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer.jsx'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [] // Add as and when needed.

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

const div = document.createElement('div');
document.body.appendChild(div);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  div
);
