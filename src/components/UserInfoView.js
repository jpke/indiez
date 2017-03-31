import React from 'react';
import TaskView from './TaskView.js'
import {url} from '../constants/actionTypes'


const UserInfoView = (props) => (
  <div id="taskListContainer">
    <button id="toggleUserView" onClick={() => props.toggleUserView()}>Back</button>
    <section id="tasks">
      {typeof(props.tasks) !== "undefined" ?
        props.tasks.map((task, index) => {
          return <TaskView task={task}
                  deleteTask={props.deleteTask}
                  createTask={props.createTask}
                  key={index}
                  readOnly={true}
                  />
        })
      :
       <p>No Tasks Found</p>
      }
    </section>
  </div>
);

export default UserInfoView;
