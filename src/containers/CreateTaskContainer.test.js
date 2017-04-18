/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
const store = configureStore();

import CreateTaskContainer from './CreateTaskContainer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CreateTaskContainer />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
