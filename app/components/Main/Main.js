// Include React
import React, { Component } from 'react';
import Nav from '../../containers/Nav/Nav';

require('./main.css');

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
                                <i className="fa down-arrow animated">
                                   <img className="down-arrow" src={require("./img/shapes/HomeDown.png")} alt="Down Arrow" />
                                </i>
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
                    <button className="btn" >Get Started</button>
                </div>
            </div>
        </section>

        <section id="user-comments" className="content-section text-center">
            <div className="user-feedback-section">
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

        <footer>
            <div className="container text-center">
                <p>Copyright &copy; Your Website 2016</p>
            </div>
        </footer>
      </div>
    );
  }
}
