// Include React
import React, { Component } from 'react';
import Nav from './children/Nav';

// Here we include all of the sub-components
// var Form = require("./children/Form");
// var Results = require("./children/Results");
// var History = require("./children/History");

// // Helper for making AJAX requests to our API
// var helpers = require("./utils/helpers");

// Creating the Main component
export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        
        <header className="intro">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h1 className="brand-heading">Be Prepared. TravelSafe.</h1>
                            <h3 className="intro-text">Secure your travel experience.</h3>
                            <ul className="positives_list">
                                <p>Sign up for free and you get:</p>
                                <p>Streaming updates on security status using a variety of different factors.</p>
                                <p>Locations of active safe zones and hospitals, police etc.</p> 
                                <p>Highly customized for each, specific region, using security data for the locations you'll be traveling to.</p>
                            </ul>
                            <a href="#about" className="btn btn-circle page-scroll">
                                <i className="fa fa-angle-double-down animated"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="about" className="container content-section text-center">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <h2>Hello Traveler</h2>
                    <p>Beard vegan intelligentsia master cleanse bushwick mlkshk, vaporware dreamcatcher letterpress whatever art party hammock artisan roof party. Disrupt authentic 90's, green juice mlkshk palo santo kickstarter vexillologist post-ironic lyft biodiesel fam fingerstache pour-over. Jean shorts forage occupy fam tumblr. Air plant fanny pack yr, twee art party banjo squid flannel taxidermy. Selfies actually single-origin coffee twee vegan fashion axe hoodie venmo shoreditch before they sold out fanny pack lyft aesthetic. Leggings keytar literally hashtag, taxidermy pug thundercats palo santo asymmetrical XOXO flexitarian aesthetic meggings +1. Waistcoat semiotics biodiesel, bushwick etsy hot chicken vinyl craft beer VHS hashtag prism ugh literally knausgaard kitsch. Chartreuse mixtape post-ironic, drinking vinegar taiyaki fashion axe flexitarian poutine. Shabby chic air plant cred, skateboard pour-over whatever freegan portland keytar jean shorts beard 90's drinking vinegar williamsburg.</p>
                </div>
            </div>
        </section>

        <section id="user-comments" className="content-section text-center">
            <div className="download-section">
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2">
                        <h2>TravelSafe User Comments</h2>
                        <p>Without your journeys, we would be lost</p>
                        <p>Thank you for letting us help you be safe in your travels.</p>
                        <div className="container content">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <div className="testimonials">
                                        <div className="active item">
                                          <blockquote><p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p></blockquote>
                                          <div className="carousel-info">
                                            <img alt="" src="http://keenthemes.com/assets/bootsnipp/img1-small.jpg" className="pull-left" />
                                            <div className="pull-left">
                                              <span className="testimonials-name">Lina Mars</span>
                                              <span className="testimonials-post">Commercial Director</span>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" className="container content-section text-center">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <h2>Contact Start Bootstrap</h2>
                    <p>Feel free to email us to provide some feedback on our templates, give us suggestions for new templates and themes, or to just say hello!</p>
                    <p><a href="mailto:feedback@startbootstrap.com">feedback@startbootstrap.com</a>
                    </p>
                    <ul className="list-inline banner-social-buttons">
                        <li>
                            <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="https://plus.google.com/+Startbootstrap/posts" className="btn btn-default btn-lg"><i className="fa fa-google-plus fa-fw"></i> <span className="network-name">Google+</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <div id="map"></div>

        <footer>
            <div className="container text-center">
                <p>Copyright &copy; Your Website 2016</p>
            </div>
        </footer>
      </div>
    );
  }
}
