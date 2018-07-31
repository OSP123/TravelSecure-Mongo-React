import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Auth from "./utils/Auth";
import axios from 'axios';

const PrivateRoute = ({ component: Component }) => (
  <Route render={props => (
    Auth.isUserAuthenticatedStorage() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Protected = () => <h3>Protected</h3>

export default class MainRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.deAuthenticate = this.deAuthenticate.bind(this);
  }

  componentDidMount() {
    Auth.isUserAuthenticatedStorage() ? this.authenticate : this.deAuthenticate
  }

  authenticate() {
    this.setState({
      authenticated: true
    })
  }

  deAuthenticate() {
    this.setState({
      authenticated: false
    })
  }

  logout() {
    axios.get('/apis/users/logout')
      .then(function (data) {
        console.log("yooo");
        Auth.deauthenticateStorage(this.deAuthenticate);
        this.deAuthenticate();
      }.bind(this)).catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
      	<Switch>
          <Route exact path="/" render={props => 
            <Main
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
          <Route exact path="/login" render={props => 
            <Login
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />}
          />
          <Route exact path="/signup" render={props => 
            <Signup
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
          <PrivateRoute path="/protected" component={Protected}/>
      	</Switch>
      </Router>
    );
  }
}