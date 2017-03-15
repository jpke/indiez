import React from 'react';

//view called by CreateTaskContainer
const CreateTaskView = (props) => (
  <div className="newTaskForm">
    <h3>{props.newTask._id ? "Edit Task" : "Create New Task"}</h3>
    <form onSubmit={(e) => {
        e.preventDefault();
        props.createTask()
        props.cancelCreateTask()}}>
      <input type="text" name="name" defaultValue={props.newTask.name} onChange={(e) => {props.updateNewTask(e.target.name, e.target.value)}} />
      <input type="date" name="endDate" defaultValue={props.newTask.endDate} onChange={(e) => {props.updateNewTask(e.target.name, e.target.value)}} />
      <textarea type="text" name="description" defaultValue={props.newTask.description} onChange={(e) => {props.updateNewTask(e.target.name, e.target.value)}} />
      <input type="text" name="createdBy" defaultValue={props.newTask.createdBy} onChange={(e) => {props.updateNewTask(e.target.name, e.target.value)}} />
      <button type="submit">Create</button>
    </form>
    <button onClick={() => {props.cancelCreateTask()}}>Cancel</button>
  </div>
);

export default CreateTaskView;
