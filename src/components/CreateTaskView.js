import React from 'react';

//view called by CreateTaskContainer
const CreateTaskView = (props) => (
  <div className="newTaskForm">
    <h3>Create New Task</h3>
    <form onSubmit={(e) => {
        e.preventDefault();
        props.createTask()
        props.cancelCreateTask()}}>
      <input type="text" name="name" value={props.newTask.name} onChange={(e) => {console.log(e)}} />
      <input type="date" name="endDate" value={props.newTask.endDate} onChange={(e) => {console.log(e)}} />
      <textarea type="text" name="description" value={props.newTask.description} onChange={(e) => {console.log(e)}} />
      <input type="text" name="createdBy" value={props.newTask.createdBy} onChange={(e) => {console.log(e)}} />
      <button type="submit">Create</button>
    </form>
    <button onClick={() => {props.cancelCreateTask()}}>Cancel</button>
  </div>
);

export default CreateTaskView;
