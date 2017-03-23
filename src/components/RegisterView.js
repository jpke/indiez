import React from 'react';

//view called by AdminView when viewLogin is false for unauthenticated user
//displays form for new user to enter username email and password to register and log in
const Register = (props) => {
  return (
    <div className="registerContainer">
      <h3 className="title">Register</h3>
      <form onSubmit={props.register} id="authForm">
        <input type="text" id="userName" className="auth" placeholder="name" />
        <input type="email" id="email" className="auth" placeholder="email" />
        <input type="password" id="password" className="auth" placeholder="password" />
        <button className="authButton" type="submit">Register</button>
      </form>
    </div>
  )
};

export default Register;
