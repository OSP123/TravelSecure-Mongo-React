import Nav from './children/Nav'
import React, { Component } from 'react';
require('./trips.css');
import Nav from '../children/Nav';
import Login from '../Login';
import NewTrip from '../children/NewTrips/NewTrip';

export default class Trip extends Component {
	
render() {
	return (
		<div className="all-trips-container container">
			<div className="row">
				{{#if trip }}
				{{#each trip}}
				<div className="trip-container col-xs-12 col-sm-6 col-lg-6">
					<div className="trip-subcontainer trip-default">
						<h3 className="lead">
							Trip: {{ this.name }} Test trip name
						</h3>
						<div className="bottom-trip-container">
							<div className="risk-analysis-container">
									{{!-- {{ riskAnalysis }} --}}
								<p className="risk-analysis">
									Some Kind of Risk Analysis
								</p>
							</div>
							<div className="destination-container">
									{{!-- {{ riskAnalysis }} --}}
								<p className="destination">
									{{ this.destination }}
								</p>
							</div>
							<button type="button" className="btn btn-circle"><i className="">10</i></button>
						</div>
					</div>
				</div>
				{{/each}}
				{{/if}}
			<button id="add-trip-button" data-toggle="modal" data-target="#squarespaceModal" type="button" class="btn btn-circle"><i class="glyphicon glyphicon-plus"></i></button>
			</div>
		</div>
	)
}
}