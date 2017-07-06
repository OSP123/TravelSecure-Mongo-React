import React, { Component } from 'react';

export default class Nav extends Component { 
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i className="fa fa-bars"></i>
            </button>
          </div>

          <div className="collapse navbar-collapse navbar-left navbar-main-collapse">
              <ul className="nav navbar-nav">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  
                  <li>
                      <a className="page-scroll" href="/pricing/">Pricing</a>
                  </li>
                      <li>
                          <a className="page-scroll" href="/trips/">My Trips</a>
                      </li>
                      <li>
                          <a href="/users/sign-out" className="page-scroll" data-toggle="modal">Logout</a>
                      </li>
                  
                      <li>
                          <a className="page-scroll" data-toggle="modal" data-target="#login-modal">Login</a>
                      </li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}