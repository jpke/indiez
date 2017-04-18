import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTasks,
        getUsers,
        badResponse,
        logOut,
        newProfilePic,
        uploadProfileImage,
        unsetProfilePic,
        toggleTaskUser,
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
      this.loadTasksAndUsers(newProps.token);
    }
  }

  loadTasksAndUsers(token) {
    this.props.getTasks("all", "1", "mine", token);
    this.props.getUsers(token);
  }

  uploadProfilePic() {
    let file = document.getElementById("profilePicSelector").files[0];
    this.props.uploadProfileImage(file, this.props.token)
  }

  render() {
    return (
      this.props.token ?
        <AppView
          userName={this.props.userName}
          logOut={this.props.logOut}
          userId={this.props.userId}
          profilePicSet={this.props.profilePicSet}
          unsetProfilePic={this.props.unsetProfilePic}
          profilePicExists={this.props.profilePicExists}
          newProfilePic={this.props.newProfilePic}
          uploadProfileImage={this.uploadProfilePic.bind(this)}
          toggleTaskUser={this.props.toggleTaskUser}
          taskView={this.props.taskView}
        />
      :
        <AuthContainer />
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    loading: state.loading,
    filterWhos: state.filterWhos,
    filterType: state.filterType,
    filterBy: state.filterBy,
    token: state.token,
    userName: state.userName,
    userId: state.userId,
    profilePicSet: state.profilePicSet,
    profilePicExists: state.profilePicExists,
    taskView: state.taskView

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: (createdOrEnd, value, whose, token) => dispatch(getTasks(createdOrEnd, value, whose, token)),
    getUsers: (token) => dispatch(getUsers(token)),
    clearErrorMessage: () => dispatch(badResponse("")),
    logOut: () => dispatch(logOut()),
    newProfilePic: (file) => dispatch(newProfilePic(file)),
    uploadProfileImage: (file, token) => dispatch(uploadProfileImage(file, token)),
    unsetProfilePic: () => dispatch(unsetProfilePic()),
    toggleTaskUser: () => dispatch(toggleTaskUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
