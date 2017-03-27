import React from 'react';
import {connect} from 'react-redux';
import {updateNewTask, submitTask, createTask} from '../actions/taskActions';
import CreateTaskView from '../components/CreateTaskView';

//Container for CreateTaskView
export const CreateTaskContainer = (props) => {

  const createTask = () => {
    props.submitTask(props.newTask, props.userId, props.token)
  }

  const formatDate = (date) => {
    let d = new Date(+date).toLocaleDateString();
    d = d.split('/');
    let month = "" + d[0]
    let day = "" + d[1]
    let pad = "00"
    d[0] = pad.substring(0, pad.length - month.length) + month
    d[1] = pad.substring(0, pad.length - day.length) + day
    d = d[2].concat("-", d[0], "-", d[1]);
    return d;
  }

  return (
      <CreateTaskView
        updateNewTask={props.updateNewTask}
        createTask={createTask}
        newTask={props.newTask}
        endDate={formatDate(props.newTask.end)}
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
