import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss';
// import { syncHistoryWithStore } from 'react-router-redux';
import AppContainer from './containers/AppContainer';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('app')
);
