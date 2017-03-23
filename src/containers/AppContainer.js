import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTasks,
        badResponse,
        deleteTask,
        createTask,
        editFilterBy,
        logOut } from '../actions/taskActions';
import AppView from '../components/AppView';
import AuthContainer from './AuthContainer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

//container for AppView, recieves child components from react router
class AppContainer extends Component {


  constructor(props) {
    super(props);
    this.props.getTasks("all", "1");
  }

  componentWillReceiveProps(newProps) {
    if(newProps.errorMessage) {
      alert(newProps.errorMessage.concat(" failed, please try again"));
      this.props.clearErrorMessage();
    }
  }

  render() {
    return (
      this.props.token ?
        <AppView
          tasks={this.props.tasks}
          createTask={this.props.createTask}
          deleteTask={this.props.deleteTask}
          createNewTask={this.props.createNewTask}
          filterType={this.props.filterType}
          filterBy={this.props.filterBy}
          editFilterBy={this.props.editFilterBy}
          getTasks={this.props.getTasks}
          userName={this.props.userName}
          logOut={this.props.logOut}
        />
      :
        <AuthContainer />
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    createNewTask: state.createNewTask,
    errorMessage: state.errorMessage,
    loading: state.loading,
    filterType: state.filterType,
    filterBy: state.filterBy,
    token: state.token,
    userName: state.userName

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: (createdOrEnd, value) => dispatch(getTasks(createdOrEnd, value)),
    clearErrorMessage: () => dispatch(badResponse("")),
    deleteTask: (taskID) => dispatch(deleteTask(taskID)),
    createTask: (ID) => dispatch(createTask(ID)),
    editFilterBy: (filterType, date) => dispatch(editFilterBy(filterType, date)),
    logOut: () => dispatch(logOut())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
