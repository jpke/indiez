import React from 'react';
import Register from './RegisterView';
import Login from './LoginView';

//view for authContainer
//will call login or register views when user is not logged in
//will call list of courses available to user when user is logged in
const AuthView = (props) => {
  return (
    <div className="authContainer">

      {props.viewLogin === true ?
        <div className="authFormContainer">
          <h2>Welcome</h2>
          <h4>You must login or </h4>
          <button className="toggleLogin" onClick={props.toggleView}>Register</button>
          <Login logIn={props.logIn} demo={props.demo}/>
        </div>
        :
        <div className="authFormContainer">
          <h2>Welcome</h2>
          <h4>You must register or </h4>
          <button className="toggleLogin" onClick={props.toggleView}>Login</button>
          <Register register={props.register} />
        </div>
        }
    </div>
  );
}

export default AuthView;
