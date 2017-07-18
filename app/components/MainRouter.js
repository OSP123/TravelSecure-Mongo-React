import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import { Redirect } from 'react-router';

export default class MainRouter extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      		<Route exact={true} path="/" component={Main} />
      		<Route exact={true} path="/login" component={Login} render={() => (
            loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/login" />
            )
          )} />
          <Route exact={true} path="/signup" component={Signup} />
      	</Switch>
      </Router>
    );
  }
}