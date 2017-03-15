import React, {Component} from 'react';
import {connect} from 'react-redux';
import {badResponse, deleteTask, createTask} from '../actions/taskActions';
import AppView from '../components/AppView';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

//container for AppView, recieves child components from react router
class AppContainer extends Component {


  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.errorMessage) {
      alert(newProps.errorMessage.concat(" failed, please try again"));
      this.props.clearErrorMessage();
    }
  }

  render() {
    return (
        <AppView
          tasks={this.props.tasks}
          createTask={this.props.createTask}
          deleteTask={this.props.deleteTask}
          createNewTask={this.props.createNewTask}
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    createNewTask: state.createNewTask,
    errorMessage: state.errorMessage,
    loading: state.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearErrorMessage: () => dispatch(badResponse("")),
    deleteTask: (taskID) => dispatch(deleteTask(taskID)),
    createTask: () => dispatch(createTask())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);