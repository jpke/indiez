import React from 'react';
import TaskView from './TaskView.js'
import CreateTaskContainer from '../containers/CreateTaskContainer'

//view component, receives props from AppContainer
//returns background app view nav and header
//calls child components passed in as props
const AppView = (props) => (
  <div>
    <div className="header">
      <h1>Task Manager</h1>
      <div>
        <p>Filter component will go here</p>
        <button onClick={() => {props.createTask()}}>Create Task</button>
        {props.createNewTask && <CreateTaskContainer/>}
      </div>
      {props.tasks && props.tasks.map((task) => {
        return <TaskView task={task}
                deleteTask={props.deleteTask}
                createTask={props.createTask}
                />
      })
      }
    </div>
  </div>
);

export default AppView;
