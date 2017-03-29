import React from 'react';
import TaskView from './TaskView.js'
import CreateTaskContainer from '../containers/CreateTaskContainer'

const url = "http://localhost:8080/";
// const url = "https://taskmanager-3-17.herokuapp.com";

//view component, receives props from AppContainer
//returns background app view nav and header
//calls child components passed in as props
const AppView = (props) => (
  <div id="main">
    <section id="top">
      <button id="logout" onClick={() => props.logOut()}>Logout</button>
      <p>{"Welcome " + props.userName}</p>
      {true ? <img className="profileImage" src={url + "profileImage/" + "upload_5c790255ffc127a4d2c7acad0ebdf359"} />
        :
        <div>
          <p>upload profile pic here</p>
          <input type="file" id="profilePicSelector" onChange={(e) => {props.newProfilePic(e.target.files[0])}}/>
          <button id="imageUpload" onClick={() => props.uploadProfileImage()}>Upload</button>
        </div>
      }
    </section>
    <section id="header">
      <h1>Task Manager</h1>
      <section id="filter">
        <select name="selectFilter" onChange={(e) => props.editFilterBy(e.target.value, props.filterType, props.filterBy)
          }>
          <option value="mine">My Tasks</option>
          <option value="everyone">Everyone's Tasks</option>
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
                  userName={props.userName}
                  deleteTask={props.deleteTask}
                  createTask={props.createTask}
                  key={index}
                  />
        })
      :
       <p>No Tasks Listed</p>
      }
    </section>
  </div>
);

export default AppView;
