import React from 'react';

//creates card for task
const TaskView = ({task, deleteTask}) => (
  <div className="taskContainer" key={task.id}>
    <h3>{task.name}</h3>
    <ul>
      <li>{"End Date: " + new Date(task.end).toLocaleDateString()}</li>
      <li>{"Description: " + task.description}</li>
      <li>{"Created: " + new Date(task.created).toLocaleDateString() + " " + new Date(task.created).toLocaleTimeString()}</li>
      <li>{"Created By: " + task.createdBy}</li>
    </ul>
    <button onClick={() => {deleteTask(task._id)}}>Delete</button>
  </div>
);

export default TaskView;
