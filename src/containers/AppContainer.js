import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTasks,
        badResponse,
        deleteTask,
        createTask,
        editFilterBy,
        logOut,
        newProfilePic,
        uploadProfileImage
      } from '../actions/taskActions';
import AppView from '../components/AppView';
import AuthContainer from './AuthContainer';

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
    if(newProps.token && !this.props.token) {
      this.props.getTasks("all", "1", "mine", newProps.token);
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
          filterWhos={this.props.filterWhos}
          filterType={this.props.filterType}
          filterBy={this.props.filterBy}
          editFilterBy={this.props.editFilterBy}
          getTasks={this.props.getTasks}
          token={this.props.token}
          userName={this.props.userName}
          logOut={this.props.logOut}
          newProfilePic={this.props.newProfilePic}
          uploadProfileImage={this.props.uploadProfileImage}
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
    filterWhos: state.filterWhos,
    filterType: state.filterType,
    filterBy: state.filterBy,
    token: state.token,
    userName: state.userName

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: (createdOrEnd, value, whose, token) => dispatch(getTasks(createdOrEnd, value, whose, token)),
    clearErrorMessage: () => dispatch(badResponse("")),
    deleteTask: (taskID, token) => dispatch(deleteTask(taskID, token)),
    createTask: (ID, token) => dispatch(createTask(ID, token)),
    editFilterBy: (filterWhos, filterType, date) => dispatch(editFilterBy(filterWhos, filterType, date)),
    logOut: () => dispatch(logOut()),
    newProfilePic: (file) => dispatch(newProfilePic(file)),
    uploadProfileImage: (file, token) => dispatch(uploadProfileImage(file, token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
