import React from 'react';
import {connect} from 'react-redux';
import {updateNewTask, submitTask, createTask} from '../actions/taskActions';
import CreateTaskView from '../components/CreateTaskView';

//Container for CreateTaskView
export const CreateTaskContainer = (props) => {

  const createTask = () => {
    props.submitTask(props.newTask, props.userId, props.token)
  }

  return (
      <CreateTaskView
        updateNewTask={props.updateNewTask}
        createTask={createTask}
        newTask={props.newTask}
        cancelCreateTask={props.cancelCreateTask}
        userName={props.userName}
      />
  );
};

// QuizPage.propTypes

function mapStateToProps(state) {
  return {
      newTask: state.newTask,
      token: state.token,
      userId: state.userId,
      userName: state.userName
    }
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewTask: (key, value) => dispatch(updateNewTask(key, value)),
    submitTask: (newTask, userId, token) => dispatch(submitTask(newTask, userId, token)),
    cancelCreateTask: () => dispatch(createTask())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskContainer);
