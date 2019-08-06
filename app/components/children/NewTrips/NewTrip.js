<div class="modal fade" id="squarespaceModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
			<h3 class="modal-title" id="lineModalLabel">Add a new Trip</h3>
		</div>
		<div class="modal-body">
      <!-- content goes here -->
			<form id="tripForm">
        <div id="map-places-container">
        	<div class="form-group">
			    	<input id="tripName" name="tripName" type="text" placeholder="Trip Name"></input>
			    </div>
          <div id="locationField">
			      <input id="autocomplete" placeholder="Enter Address Here for Autocomplete" onFocus="geolocate()" type="text"></input>
			    </div>
			    <table id="address">
			      <tr>
			        <td class="label">Street address</td>
			        <td class="slimField"><input class="field" id="street_number"
			              disabled="true"></input></td>
			        <td class="wideField" colspan="2"><input class="field" id="route"
			              disabled="true"></input></td>
			      </tr>
			      <tr>
			        <td class="label">City</td>
			        <!-- Note: Selection of address components in this example is typical.
			             You may need to adjust it for the locations relevant to your app. See
			             https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
			        -->
			        <td class="wideField" colspan="3"><input class="field" id="locality"
			              disabled="true"></input></td>
			      </tr>
			      <tr>
			        <td class="label">State</td>
			        <td class="slimField"><input class="field"
			              id="administrative_area_level_1" disabled="true"></input></td>
			        <td class="label">Zip code</td>
			        <td class="wideField"><input class="field" id="postal_code"
			              disabled="true"></input></td>
			      </tr>
			      <tr>
			        <td class="label">Country</td>
			        <td class="wideField" colspan="3"><input class="field"
			              id="country" disabled="true"></input></td>
			      </tr>
			    </table>
						<input name="location_lat" type="hidden">
						<input name="location_lng" type="hidden">
						<input name="location_id" type="hidden">
				</div>
				<div class="form-group">
				  <label for="methodOfTransport">Choose Mode of Transportation:</label>
				  <select class="form-control" id="methodOfTransport">
				    <option id="flight" name="flight" value="flight">Flight</option>
				    <option id="car" name="car" value="car">Car</option>
				    <option id="bus" name="bus" value="bus">Bus</option>
				    <option id="train" name="train" value="train">
				    Train</option>
				    <option id="bicycle" name="bicycle" value="bicycle">Bicycle</option>
				    <option id="walking" name="walking" value="walking">Walking</option>
				    <option id="other" name="other" value="other">Other</option>
				    <option id="multiple" name="multiple" value="multiple">Multiple Transports</option>
				  </select>
				</div>
				<div class="form-group"> <!-- Date input -->
	        <p>Date of Arrival at Destination: <input type="text" id="datepicker"></p>
      	</div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
		</div>
	</div>
	
  </div>

</div>

<script src="/assets/js/place-search.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRcvaMpIKjj3OAWJan2G9SXrfGAkjBCi4&libraries=places&callback=initAutocomplete"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

