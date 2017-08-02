import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/Auth';

require('./nav.css');

export default class Nav extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      authenticated: ''
    };
    this.authChange = this.authChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  authChange() {
    if (Auth.isUserAuthenticated()) {
      this.setState({
        authenticated: true
      });
    } else {
      this.setState({
        authenticated: false
      });
    }
  }

  handleClick() {
    const navbarButton = this.refs.navbarButton;
    const navbar = this.refs.navbar;
    const navbarDisplayVal =  window.getComputedStyle(navbar).getPropertyValue("display");
    if (navbarDisplayVal !== 'none') {
      navbarButton.click();
    }
  }

  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container nav-container">
          <div className="navbar-header">
            <button ref="navbarButton" type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i className="fa fa-bars"></i>
            </button>
            <button type="button" className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target=".navbar-main-collapse1">
                <i className="glyphicon glyphicon-plus"></i>
            </button>
            <Link to={"/"} ><img className="icon-middle-nav-mobile" src={require("../../img/shapes/shape.png")} /></Link>
          </div>

          <div ref="navbar" className="collapse navbar-collapse navbar-left navbar-main-collapse">
              <ul className="nav navbar-nav">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  
                  <li>
                      <a className="page-scroll nav-left-text" onClick={this.handleClick} href="/pricing/"><p>ABOUT US</p></a>
                  </li>
                  <li>
                      <a className="page-scroll nav-left-text" onClick={this.handleClick} href="/trips/"><p>PRICING</p></a>
                  </li>
                  {Auth.isUserAuthenticated() ? (
                    <li data-toggle="collapse" data-target=".navbar-collapse.show">
                      <a onClick={ () => { 
                          this.handleClick();
                          Auth.deauthenticateUser();
                          this.authChange();
                        }
                      }>
                      <div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGOUT</p></div></a>
                    </li>
                  ) : (
                    <li>
                      <Link to={"/login"} onClick={this.handleClick} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGIN</p></div></Link>
                    </li>
                  )}
                  <li>
                      <Link to={"/protected"} onClick={this.handleClick}><div className="page-scroll nav-left-text" data-toggle="modal"><p>PROTECTED</p></div></Link>
                  </li>
                  <li>
                      <a className="page-scroll nav-left-text" href="/users/sign-out" data-toggle="modal" onClick={this.handleClick}><p>CONTACT US</p></a>
                  </li>
                  <li>
                      <a className="page-scroll nav-left-text" data-toggle="modal" data-target="#login-modal" onClick={this.handleClick}><p>REVIEWS</p></a>
                  </li>
              </ul>
          </div>
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse1">
              <ul className="nav navbar-nav">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  
                  <li>
                      <a className="page-scroll nav-right-text" href="/pricing/">
                        <img className="navigation-icons" src={require("../../img/shapes/Profile.png")} />
                        <p>PROFILE</p>
                      </a>
                  </li>
                  <li>
                      <a className="page-scroll nav-right-text" href="/trips/">
                        <img className="navigation-icons" src={require("../../img/shapes/offline.png")} />
                        <p>OFFLINE MODE</p>
                      </a>
                  </li>
                  <li>
                      <a className="page-scroll nav-right-text" href="/users/sign-out" data-toggle="modal">
                        <img className="navigation-icons" src={require("../../img/shapes/search.png")} />
                        <p>SEARCH LOCATION</p>
                      </a>
                  </li>
                  <li>
                      <a className="page-scroll nav-right-text" data-toggle="modal" data-target="#login-modal">
                        <img className="navigation-icons" src={require("../../img/shapes/itinerary.png")} />
                        <p>ITINERARY</p>
                      </a>
                  </li>
              </ul>
          </div>
          <Link to={"/"} ><img className="icon-middle-nav-desktop" src={require("../../img/shapes/shape.png")} /></Link>
        </div>
      </nav>
    );
  }
}