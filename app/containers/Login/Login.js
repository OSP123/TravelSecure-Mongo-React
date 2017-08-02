// Include React
import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Link, Redirect } from 'react-router-dom';
import Signup from "../Signup/Signup";
import axios from 'axios';
import Auth from '../../utils/Auth';

require('./login.css');

export default class Login extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	username: '',
    	password: '',
      redirectToReferrer: false
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
      Auth.authenticateUser(data.data.token);
      this.setState({ 
        redirectToReferrer: true
      });
      console.log(data);
    }.bind(this))
    .catch(function(err) {
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
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
    	<div>
    		<Nav />
				<div className="login-container">
					<h1 >MEMBER ACCOUNT LOGIN</h1>
          <div className="login-help">
            <span>Not Registered Yet? </span><Link to={"/signup"} component={Signup}>Click here.</Link>
          </div>
          <h3 >MEMBER LOGIN</h3>
				  <form className="login" onSubmit={this.handleSubmit.bind(this)}>
						<input id="username-input" ref="user" type="text" name="user" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username}/>
						<input id="password-input" ref="password" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
						<input type="submit" name="login" className="login loginmodal-submit" value="Login" />
				  </form>
				</div>
			</div>
    );
  }
}