import React from 'react';
import TaskView from './TaskView.js'
import CreateTaskContainer from '../containers/CreateTaskContainer'

//view component, receives props from AppContainer
//returns background app view nav and header
//calls child components passed in as props
const AppView = (props) => (
  <div id="main">
    <section id="top">
      <button id="logout" onClick={() => props.logOut()}>Logout</button>
      <p>{"Welcome " + props.userName}</p>
    </section>
    <section id="header">
      <h1>Task Manager</h1>
      <section id="filter">
        <select name="selectFilter" onChange={(e) => props.editFilterBy(e.target.value, props.filterBy)
          }>
          <option value="all">All Tasks</option>
          <option value="end">End Before</option>
          <option value="created">Created After</option>
        </select>
        <input type="date" name="filterByDate" id="filterByDate" defaultValue={props.filterBy} placeholder="yyyy-mm-dd" onChange={(e) => {props.editFilterBy(props.filterType, e.target.value)}} />
        <button onClick={() => props.getTasks(props.filterType, props.filterBy, props.token)}>Filter Tasks</button>
      </section>
      <button id="createOrEditButton" onClick={() => {props.createTask()}}>Create Task</button>
    </section>
    {props.createNewTask && <CreateTaskContainer/>}
    <section id="tasks">
      {typeof(props.tasks[0]) !== "undefined" ?
        props.tasks.map((task, index) => {
          return <TaskView task={task}
                  userName={props.userName}
                  deleteTask={props.deleteTask}
                  createTask={props.createTask}
                  key={index}
                  />
        })
      :
       <p>No Tasks Listed</p>
      }
    </section>
  </div>
);

export default AppView;
