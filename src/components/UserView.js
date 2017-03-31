import React from 'react';
import {url} from '../constants/actionTypes'

//creates card for task
const UserView = ({user, index, viewUser}) => (
  <div className="itemSpacer" key={index}>
    <div className="itemContainer" key={user._id} onClick={() => {viewUser(user)}}>
      <h3>{user.name}</h3>
      <section className="listProfileImage">
        {user.profilePicSet ?
          <img className="profileImage" src={url + "profileImage/" + user._id}/>
          :
          <img className="profileImage" src={url + "profileImage/" + "profilePicNotSet.jpg"} />
        }
      </section>
    </div>
  </div>
);

export default UserView;
