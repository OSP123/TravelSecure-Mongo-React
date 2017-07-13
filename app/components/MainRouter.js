import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Main from "./Main";
import Login from "./Login";

export default class MainRouter extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      		<Route exact={true} path="/" component={Main} />
      		<Route exact={true} path="/login" component={Login} />
      	</Switch>
      </Router>
    );
  }
}