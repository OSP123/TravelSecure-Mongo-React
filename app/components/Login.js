// Include React
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Nav from './children/Nav'

require('./login.css');

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  }

  loginUser = submitObject => {

    axios.post('/apis/users/login', submitObject)
      .then(function (data) {
        console.log(data.data);
        if (data.data.success) {
          this.props.authenticate();
          this.setState({
            redirectToReferrer: true
          });
        } else {
          alert(data.data.message);
        }
      }.bind(this)).catch(function (err) {
        console.log(err);
      });

    this.setState({
      username: "",
      password: ""
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const usernameInput = this.state.username;
    const passwordInput = this.state.password;

    const objSubmit = {
      username: usernameInput,
      password: passwordInput
    }

    if (!objSubmit.username || !objSubmit.password) {
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    this.loginUser(objSubmit);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />
        <div className="loginmodal-container">
          <h1 className="">Log In to Your Account</h1><br />
          <form className="login" onSubmit={this.handleSubmit}>
            <input id="username-input" ref="user" type="text" name="user" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
            <input id="password-input" ref="password" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
            <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
          </form>
          <div className="login-help">
            <Link to={"/signup"}> Register </Link>
          </div>
        </div>
      </div>
    );
  }
}