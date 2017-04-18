import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/taskActions';
import AuthView from '../components/AuthView';

//container for AuthView, adds necessary data to event calls triggered by AdminView
//allows user to register, log in or out and select course
class AuthContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {login: true};
  }
  //toggles between login and register views
  toggleView() {
    this.props.actions.toggleView();
  }

  //register new user
  register(event) {
    event.preventDefault();
    const form = event.target.elements;
    this.props.actions.register(form.userName.value, form.email.value, form.password.value);
  }

  //login user
  logIn(event) {
    event.preventDefault();
    const form = event.target.elements;
    this.props.actions.logIn(form.email.value, form.password.value);
  }

  render() {
    return (
        <AuthView
          toggleView={this.toggleView.bind(this)}
          register={this.register.bind(this)}
          logIn={this.logIn.bind(this)}
          viewLogin={this.props.loginOrRegister}
          logOut={this.props.actions.logOut}
          token={this.props.token}
          url={this.props.url}
          demo={this.props.actions.logIn}
        />
    );
  }
}

// QuizPage.propTypes

function mapStateToProps(state) {
  return {
      userName: state.userName,
      passed: state.passed,
      token: state.token,
      loginOrRegister: state.loginOrRegister
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
