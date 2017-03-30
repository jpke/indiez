import React from 'react';
import UserView from './UserView.js'
import {url} from '../constants/actionTypes'


const UserListView = (props) => (
  <div id="UserListContainer">
    {
      props.users.map((user, index) => {
        return <UserView
                name={user.name}
                id={user._id}
                getTasks={props.getTasks}
                token={props.token}
                />
      })
    }
  </div>
);

export default UserListView;
