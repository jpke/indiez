// Must have at least one test file in this directory or Mocha will throw an error.

import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import CreateTaskView from './CreateTaskView';

it('renders correctly', () => {
  const tree = renderer.create(
    <CreateTaskView
      updateNewTask={sinon.spy()}
      createTask={sinon.spy()}
      newTask="New Task"
      cancelCreateTask={sinon.spy()}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
