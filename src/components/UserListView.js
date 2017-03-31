import React from 'react';
import UserView from './UserView.js'


const UserListView = (props) => (
  <section className="contentContainer">
    <h2>Users</h2>
    <div id="userListContainer">
      {
        props.users.map((user, index) => {
          return <UserView
                  key={index}
                  index={index}
                  user={user}
                  viewUser={props.viewUser}
                  />
        })
      }
    </div>
  </section>
);

export default UserListView;
