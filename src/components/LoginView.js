import React from 'react';

//view called by AdminView when viewLogin is true for unauthenticated user
//displays form for user to enter email and password to login
const Login = (props) => {
  return (
    <div className="loginContainer">
      <h3 className="title">Login</h3>
      <form onSubmit={props.logIn} id="authForm">
        <input type="email" id="email" className="auth" placeholder="email" />
        <input type="password" id="password" className="auth" placeholder="password" />
        <button className="authButton" type="submit">Login</button>
      </form>
      <button className="authButton" onClick={() => {props.demo("demo@email.com", "password")}}>Demo</button>
    </div>
  )
};

export default Login;
