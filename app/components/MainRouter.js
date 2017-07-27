import React, { Component } from 'react';import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Auth from "./utils/Auth";

const PrivateRoute = ({ component: Component }) => (
  <Route render={props => (
    Auth.isUserAuthenticated() ? (
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
  render() {
    return (
      <Router>
      	<Switch>
      		<Route exact={true} path="/" component={Main} />
      		<Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/signup" component={Signup} />
          <PrivateRoute path="/protected" component={Protected}/>
      	</Switch>
      </Router>
    );
  }
}