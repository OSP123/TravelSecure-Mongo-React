// Include React
import React, { Component } from 'react';
import Nav from './children/Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';

require('./signup.css');

export default class Signup extends Component { 

	constructor(props) {
    super(props);
    this.state = {
    	value: '',
    	username: '',
    	password: '',
    	passwordRepeat: '',
    	email: '',
    	emailRepeat: ''
    };

    this.handleUsernameValidation = this.handleUsernameValidation.bind(this);
    this.handlePasswordValidation = this.handlePasswordValidation.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameValidation(event) {
  	// username is passed in
  	const usernameVal = this.refs.username.value,
  				usernameForm = this.refs.usernameForm,
  				usernameFeedback = this.refs.usernameFeedback;
  	// username is updated in state
  	this.setState({
  		'username': usernameVal
  	});

    // username is checked to see if it matches certain length. If not, the screen will indicate it as such.
    if (usernameVal.length < 6) {
    	usernameForm.classList.remove("has-success");
      usernameForm.classList.add("has-error");
      usernameFeedback.textContent = "username must be at least 6 characters long";
    } else {
      usernameForm.classList.remove("has-error");

      usernameForm.classList.add("has-success");
      usernameFeedback.textContent = "Username valid!";
    }
  }

	handlePasswordValidation(event) {

	// password is passed in
	const passwordVal = this.refs.password.value;
	const passwordForm = this.refs.passwordForm;

	this.setState({
      'password': value
  });

	const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (!passwordRegEx.test(passwordVal)) {
      $("#password-form").removeClass("has-success");

      $("#password-form").addClass("has-error");
      $("#password-feedback").text("Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.");
    } else {
      $("#password-form").removeClass("has-error");

      $("#password-form").addClass("has-success");
      $("#password-feedback").text("Password set correctly!");    
    }
  }

 	handleEmailValidation(event) {

    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    this.setState({
      [name]: value
    });
  }


	handleSubmit(event) {
		event.preventDefault();
		console.log(this);

		axios.post("/users/signup", {
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.password.email.value
    }).then(function(data) {
      if (data.duplicateUser) {
        // Replace with Modal
        alert("Sorry, that username has been taken");
      } else {
        console.log("It works!");
      }
    }).catch(function(err) {
      console.log(err);
    });
	}

  render() {
    return (
    	<div>
	    	<Nav />
				<div id="registration-container" className="container-fluid">
				    <section className="container">
						<div className="container-page">		
						<form onSubmit={this.handleSubmit.bind(this)}>		
							<div className="col-md-6">
								<h3 className="dark-grey">Registration</h3>
								
								<div id="username-form" ref="usernameForm" className="form-group col-lg-12">
									<label>Username</label>
									<input type="" name="" ref="username" className="form-control" id="username-input" value={this.state.username} onChange={this.handleUsernameValidation}/>
									<small id="username-feedback" ref="usernameFeedback" className=""></small>
								</div>
								
								<div id="password-form" className="form-group col-lg-12" ref="passwordForm">
									<label>Password</label>
									<input type="password" name="" ref="password" className="form-control" id="password-input" value={this.state.password} onChange={this.handlePasswordValidation} />
									<small id="password-feedback" ref="password-feedback" className=""></small>
								</div>
								
								<div id="repeat-password-form" className="form-group col-lg-12" ref="repeatPasswordForm">
									<label>Repeat Password</label>
									<input type="password" name="" ref="repeat-password" className="form-control" id="repeat-password-input" value={this.state.value} onChange={this.handleChange} />
									<small id="repeat-password-feedback" className="" ref="repeat-password"></small>
								</div>
												
								<div id="email-form" className="form-group col-lg-12" ref="emailForm">
									<label>Email Address</label>
									<input type="email" name="" ref="email" className="form-control" id="email-input" value={this.state.value} onChange={this.hanldeEmailValidation} />

								  <p id="email-feedback" className=""></p>
								  <small id="email-additional-feedback" ref="emailAdditionalFeedback" className="form-text text-muted"></small>
								</div>
								
								<div id="email-repeat-form" className="form-group col-lg-12" ref="emailRepeatForm">
									<label>Repeat Email Address</label>
									<input type="email" name="" ref="email-repeat" className="form-control" id="repeat-email-input" value={this.state.value} onChange={this.handleChange} />
									<small id="email-repeat-feedback" className="" ref="emailRepeatFeedback"></small>
								</div>			
								
								<div className="col-sm-6">
									<input type="checkbox" className="checkbox" />Sigh up for our newsletter
								</div>

								<div className="col-sm-6">
									<input type="checkbox" className="checkbox" />Send notifications to this email
								</div>				
							
							</div>
						
							<div className="col-md-6">
								<h3 className="dark-grey">Terms and Conditions</h3>
								<p>
									By clicking on "Register" you agree to The Company's' Terms and Conditions
								</p>
								<p>
									While rare, prices are subject to change based on exchange rate fluctuations - 
									should such a fluctuation happen, we may request an additional payment. You have the option to request a full refund or to pay the new price. (Paragraph 13.5.8)
								</p>
								<p>
									Should there be an error in the description or pricing of a product, we will provide you with a full refund (Paragraph 13.5.6)
								</p>
								<p>
									Acceptance of an order by us is dependent on our suppliers ability to provide the product. (Paragraph 13.5.6)
								</p>
								
								<button type="submit" className="btn btn-primary signup">Register</button>
							</div>
						</form>
						</div>
					</section>
				</div>
			</div>
		)
	}
}