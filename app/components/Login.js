// Include React
import React, { Component } from 'react';
import Nav from './children/Nav';
import { Link } from 'react-router-dom';
import Signup from "./Signup";

require('./login.css');

export default class Login extends Component {
  render() {
    return (
    	<div>
				<div className="loginmodal-container">
					<h1 className="">Log In to Your Account</h1><br />
				  <form className="login">
						<input id="username-input" type="text" name="user" placeholder="Username" />
						<input id="password-input" type="password" name="pass" placeholder="Password" />
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