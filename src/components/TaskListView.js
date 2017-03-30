import React from 'react';
import TaskView from './TaskView.js'
import CreateTaskContainer from '../containers/CreateTaskContainer'
import {url} from '../constants/actionTypes'


const TaskListView = (props) => (
  <section id="filter">
    <select name="selectFilter" onChange={(e) => props.editFilterBy(e.target.value, props.filterType, props.filterBy)
      }>
      <option value="mine">My Tasks</option>
      <option value="everyone">All Tasks</option>
    </select>
    <select name="selectFilter" onChange={(e) => props.editFilterBy(props.filterWhos, e.target.value, props.filterBy)
      }>
      <option value="all">All</option>
      <option value="end">End Before</option>
      <option value="created">Created After</option>
    </select>
    <input type="date" name="filterByDate" id="filterByDate" defaultValue={props.filterBy} placeholder="yyyy-mm-dd" onChange={(e) => {props.editFilterBy(props.filterWhos, props.filterType, e.target.value)}} />
  </section>
  <button onClick={() => props.getTasks(props.filterType, props.filterBy, props.filterWhos, props.token)}>Filter Tasks</button>
  <button id="createOrEditButton" onClick={() => {props.createTask()}}>Create Task</button>
  </section>
  {props.createNewTask && <CreateTaskContainer/>}
  <section id="tasks">
  {typeof(props.tasks[0]) !== "undefined" ?
    props.tasks.map((task, index) => {
      return <TaskView task={task}
              deleteTask={props.deleteTask}
              createTask={props.createTask}
              key={index}
              />
    })
  :
   <p>No Tasks Listed</p>
  }
  </section>
);

export default TaskListView;
