import React from 'react';

//view called by CreateTaskContainer
const CreateTaskView = (props) => (
  <div id="newTaskForm">
    <h2>{props.newTask._id ? "Edit Task" : "Create New Task"}</h2>
    <form onSubmit={(e) => {
        e.preventDefault();
        props.createTask()
        props.cancelCreateTask()}}>
      <label>Task Name</label>
      <input type="text" name="name" defaultValue={props.newTask.name} onChange={(e) => {props.updateNewTask(e.target.name, e.target.value)}} />
      <label>End Date</label>
      <input type="date" name="endDate" value={props.newTask.end} onChange={(e) => {props.updateNewTask(e.target.name, e.target.value)}} />
      <label>Description</label>
      <textarea type="text" name="description" defaultValue={props.newTask.description} onChange={(e) => {props.updateNewTask(e.target.name, e.target.value)}} />
      <label>Created By</label>
      <input type="text" name="createdBy" defaultValue={props.newTask.createdBy} onChange={(e) => {props.updateNewTask(e.target.name, e.target.value)}} />
      <section className="taskButtons">
        <button onClick={() => {props.cancelCreateTask()}}>Cancel</button>
        <button type="submit">{props.newTask._id ? "Update" : "Create"}</button>
      </section>
    </form>
  </div>
);

export default CreateTaskView;
