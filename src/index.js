import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App/';
import { saveState } from './utils/localStorage';
import 'react-s-alert/dist/s-alert-default.css';
import './assets/stylesheets/main.scss';

const store = configureStore();

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
