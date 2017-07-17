// Include React
import React, { Component } from 'react';
import Nav from './children/Nav';
import { Link } from 'react-router-dom';
import Signup from "./Signup";
import axios from 'axios';

require('./login.css');

export default class Login extends Component {
	handleSubmit(event) {
		event.preventDefault();
		const objSubmit = {
			username: this.refs.user.value,
			password: this.refs.password.value
		}
		console.log(objSubmit);
		axios.post('/users/login', objSubmit)
		.then(function(data) {
      // window.location.replace(data);
      console.log(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
	}

  render() {
    return (
    	<div>
    		<Nav />
				<div className="loginmodal-container">
					<h1 className="">Log In to Your Account</h1><br />
				  <form className="login" onSubmit={this.handleSubmit.bind(this)}>
						<input id="username-input" ref="user" type="text" name="user" placeholder="Username" />
						<input id="password-input" ref="password" type="password" name="pass" placeholder="Password" />
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