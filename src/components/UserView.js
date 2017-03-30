import React from 'react';
import {url} from '../constants/actionTypes'

//creates card for task
const UserView = (props) => (
  <div className="itemSpacer">
    <div className="itemContainer" key={props.id}>
      <h3>{props.name}</h3>
      <section className="listProfileImage">
        {task.createdBy.profilePicSet &&
            <img className="profileImage" src={url + "profileImage/" + task.createdBy._id}/>
        }
      </section>
    </div>
  </div>
);

export default UserView;
