import React, { Component } from 'react';
import Nav from './children/Nav'

require('./Pricing.css');

export default class Pricing extends Component {
  render() {
    return (
        <div>
            <Nav
            authenticated={this.props.authenticated}
            authenticate={this.props.authenticate}
            deAuthenticate={this.props.deAuthenticate}
            logout={this.props.logout}
            />  
            <section id="plans">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="panel panel-danger panel-pricing">
                                <div className="panel-heading">
                                    <i className="fa fa-desktop"></i>
                                    <h3>Plan 1</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <p><strong>$100 / Month</strong></p>
                                </div>
                                <ul className="list-group text-center">
                                    <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                                </ul>
                                <div className="panel-footer">
                                    <a className="btn btn-lg btn-block btn-danger" href="#">BUY NOW!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="panel panel-warning panel-pricing">
                                <div className="panel-heading">
                                    <i className="fa fa-desktop"></i>
                                    <h3>Plan 2</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <p><strong>$200 / Month</strong></p>
                                </div>
                                <ul className="list-group text-center">
                                    <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                                </ul>
                                <div className="panel-footer">
                                    <a className="btn btn-lg btn-block btn-warning" href="#">BUY NOW!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="panel panel-success panel-pricing">
                                <div className="panel-heading">
                                    <i className="fa fa-desktop"></i>
                                    <h3>Plan 3</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <p><strong>$300 / Month</strong></p>
                                </div>
                                <ul className="list-group text-center">
                                    <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                                </ul>
                                <div className="panel-footer">
                                    <a className="btn btn-lg btn-block btn-success" href="#">BUY NOW!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}