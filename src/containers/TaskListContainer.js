import React from 'react';
import {connect} from 'react-redux';
import {getTasks,
        deleteTask,
        createTask,
        editFilterBy,
        toggleTaskUser,
        sortList
      } from '../actions/taskActions';
import TaskListView from '../components/TaskListView';

//container for TaskListContainer
const TaskListContainer = (props) => (
        <TaskListView
          tasks={props.tasks}
          createTask={props.createTask}
          deleteTask={props.deleteTask}
          createNewTask={props.createNewTask}
          filterWhos={props.filterWhos}
          filterType={props.filterType}
          filterBy={props.filterBy}
          editFilterBy={props.editFilterBy}
          getTasks={props.getTasks}
          token={props.token}
          sortList={props.sortList}
        />
);

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    createNewTask: state.createNewTask,
    filterWhos: state.filterWhos,
    filterType: state.filterType,
    filterBy: state.filterBy,
    token: state.token

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: (createdOrEnd, value, whose, token) => dispatch(getTasks(createdOrEnd, value, whose, token)),
    deleteTask: (taskID, token) => dispatch(deleteTask(taskID, token)),
    createTask: (ID, token) => dispatch(createTask(ID, token)),
    editFilterBy: (filterWhos, filterType, date) => dispatch(editFilterBy(filterWhos, filterType, date)),
    toggleTaskUser: () => dispatch(toggleTaskUser()),
    sortList: (sortBy) => dispatch(sortList(sortBy))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListContainer);
