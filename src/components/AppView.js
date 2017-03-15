import React from 'react';
import TaskView from './TaskView.js'
import CreateTaskContainer from '../containers/CreateTaskContainer'

//view component, receives props from AppContainer
//returns background app view nav and header
//calls child components passed in as props
const AppView = (props) => (
  <div id="main">
    <h1>Task Manager</h1>
      <p>Filter component will go here</p>
      <button id="createOrEditButton" onClick={() => {props.createTask()}}>Create Task</button>
      {props.createNewTask && <CreateTaskContainer/>}
    <section id="tasks">
      {props.tasks && props.tasks.map((task, index) => {
        return <TaskView task={task}
                deleteTask={props.deleteTask}
                createTask={props.createTask}
                key={index}
                />
      })
      }
    </section>
  </div>
);

export default AppView;
