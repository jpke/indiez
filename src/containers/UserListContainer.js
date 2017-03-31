import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTasks,
        deleteTask,
        createTask,
        editFilterBy,
        toggleTaskUser,
      } from '../actions/taskActions';
import UserListView from '../components/UserListView';

//container for AppView, recieves child components from react router
const UserListContainer = (props) => (
        <UserListView
          tasks={props.tasks}
          users={props.users}
          createTask={props.createTask}
          deleteTask={props.deleteTask}
          createNewTask={props.createNewTask}
          filterWhos={props.filterWhos}
          filterType={props.filterType}
          filterBy={props.filterBy}
          editFilterBy={props.editFilterBy}
          getTasks={props.getTasks}
          token={props.token}
          userName={props.userName}
          userId={props.userId}
          toggleTaskUser={props.toggleTaskUser}
          taskView={props.taskView}
        />
);

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    users: state.users,
    createNewTask: state.createNewTask,
    filterWhos: state.filterWhos,
    filterType: state.filterType,
    filterBy: state.filterBy,
    token: state.token,
    userName: state.userName,
    userId: state.userId,
    taskView: state.taskView

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: (createdOrEnd, value, whose, token) => dispatch(getTasks(createdOrEnd, value, whose, token)),
    deleteTask: (taskID, token) => dispatch(deleteTask(taskID, token)),
    createTask: (ID, token) => dispatch(createTask(ID, token)),
    editFilterBy: (filterWhos, filterType, date) => dispatch(editFilterBy(filterWhos, filterType, date)),
    toggleTaskUser: () => dispatch(toggleTaskUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
