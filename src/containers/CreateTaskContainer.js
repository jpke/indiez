import React from 'react';
import {connect} from 'react-redux';
import {updateNewTask, submitTask} from '../actions/taskActions';
import CreateTaskView from '../components/CreateTaskView';

//Container for CreateTaskView
export const CreateTaskContainer = (props) => {

  const createTask = () => {
    props.submitTask(props.newTask)
  }

  return (
      <CreateTaskView
        updateNewTask={props.updateNewTask}
        createTask={createTask}

      />
  );
};

// QuizPage.propTypes

function mapStateToProps(state) {
  return {
      newTask: state.rootReducer.newTask
    }
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewTask: (key, value) => dispatch(updateNewTask(key, value)),
    submitTask: (newTask) => dispatch(submitTask(newTask))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskContainer);
