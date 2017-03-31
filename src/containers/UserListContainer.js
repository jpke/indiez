import React from 'react';
import {connect} from 'react-redux';
import {viewUser, toggleUserView} from '../actions/taskActions';
import UserInfoView from '../components/UserInfoView';
import UserListView from '../components/UserListView';

//container for AppView, recieves child components from react router
const UserListContainer = (props) => {

  function viewUser(user) {
    props.viewUser(user, props.token);
  }

  return(
    props.userView ?
        <UserInfoView
          tasks={props.userTasks}
          user={props.selectedUser}
          toggleUserView={props.toggleUserView}
        />
      :
        <UserListView
          users={props.users}
          viewUser={viewUser}
          userView={props.userView}
        />
  );
}

function mapStateToProps(state) {
  return {
    users: state.users,
    userView: state.userView,
    token: state.token,
    userTasks: state.userTasks,
    selectedUser: state.selectedUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    viewUser: (user, token) => dispatch(viewUser(user, token)),
    toggleUserView: () => dispatch(toggleUserView())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
