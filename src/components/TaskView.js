import React from 'react';
import {url} from '../constants/actionTypes'

//creates card for task
const TaskView = ({task, deleteTask, createTask, userName, readOnly}) => (
  <div className="taskSpacer">
    <div className="taskContainer" key={task.id}>
      <h3>{task.name}</h3>
      <ul>
        <li>{"End Date: " + new Date(task.end).toLocaleDateString()}</li>
        <li>{"Description: " + task.description}</li>
        <li>{"Created: " + new Date(task.created).toLocaleDateString() + " " + new Date(task.created).toLocaleTimeString()}</li>
        <li>{"Created By: " + task.createdBy.name}</li>
      </ul>
      <section className="taskProfileImage">
        {task.createdBy.profilePicSet ?
            <img className="profileImage" src={url + "profileImage/" + task.createdBy._id}/>
            :
            <img className="profileImage" src={url + "profileImage/" + "profilePicNotSet.jpg"} />
        }
      </section>
      {!readOnly &&
        <section className="taskButtons">
          <button onClick={() => {deleteTask(task._id)}}>Delete</button>
          <button onClick={() => {createTask(task._id)}}>Edit</button>
        </section>
      }
    </div>
  </div>
);

export default TaskView;
