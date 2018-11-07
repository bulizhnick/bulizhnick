import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { store } from 'config/redux';
import { App } from 'components/App/AppContainer';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
