import React from 'react';

//creates card for task
const TaskView = ({task, deleteTask}) => (
  <div className="taskContainer" key={task.id}>
    <h3>{task.name}</h3>
    <ul>
      <li>{"End Date: " + task.end}</li>
      <li>{"Description: " + task.description}</li>
      <li>{"Created: " + task.created}</li>
      <li>{"Created By: " + task.createdBy}</li>
    </ul>
    <button onClick={() => {deleteTask(task.id)}}>Delete</button>
  </div>
);

export default TaskView;
