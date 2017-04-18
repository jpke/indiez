import React from 'react';
import TaskListContainer from '../containers/TaskListContainer'
import UserListContainer from '../containers/UserListContainer'
import {url} from '../constants/actionTypes'

//view component, receives props from AppContainer
//returns background app view nav and header
//calls task list or user list, depending on props.taskView value
const AppView = (props) => (
  <div id="main">
    <section id="top">
      <button id="logout" onClick={() => props.logOut()}>Logout</button>
      <div id="userProfile">
        <p>{"Welcome " + props.userName}</p>
        {props.profilePicSet ?
          <img className="profileImage" src={url + "profileImage/" + props.userId} onClick={() => props.unsetProfilePic()}/>
          :
          <div id="profilePicUpload">
            <p>upload profile pic</p>
            <input type="file" id="profilePicSelector" onChange={(e) => {props.newProfilePic(e.target.files[0])}}/>
            <button id="imageUpload" onClick={() => props.uploadProfileImage()}>Upload</button>
            {props.profilePicExists && <button id="imageUpload" onClick={() => props.unsetProfilePic()}>Cancel</button>}
          </div>
        }
      </div>
    </section>
    <section id="header">
      <h1>Task Manager</h1>
      <div id="task-user-toggle">
        <button className="task-user-toggle" onClick={() => {props.toggleTaskUser()}}>{props.taskView ? "View Users" : "View Tasks"}</button>
      </div>
    </section>
    <section id="dataContainer">
      {props.taskView ? <TaskListContainer /> : <UserListContainer />}
    </section>
  </div>
);

export default AppView;
