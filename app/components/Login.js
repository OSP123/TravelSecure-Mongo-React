// Include React
import React, { Component } from 'react';
import Nav from './children/Nav';
import { Link } from 'react-router-dom';
import Signup from "./Signup";
import axios from 'axios';

require('./login.css');

export default class Login extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	username: '',
    	password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleUsernameChange(event) {
  	this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
  	this.setState({
      password: event.target.value
    });
  }

  loginUser(submitObject) {
  	axios.post('/apis/users/login', submitObject)
		.then(function(data) {
      sessionStorage.setItem("user", data.data.user);
      console.log(data);
    }).catch(function(err) {
      console.log(err);
    });

    this.setState({
      username: "",
      password: ""
    });
  }

	handleSubmit(event) {
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
    return (
    	<div>
    		<Nav />
				<div className="loginmodal-container">
					<h1 className="">Log In to Your Account</h1><br />
				  <form className="login" onSubmit={this.handleSubmit.bind(this)}>
						<input id="username-input" ref="user" type="text" name="user" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username}/>
						<input id="password-input" ref="password" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
						<input type="submit" name="login" className="login loginmodal-submit" value="Login" />
				  </form>
				  <div className="login-help">
						<Link to={"/signup"} component={Signup}> Register </Link>
				  </div>
				</div>
			</div>
    );
  }
}