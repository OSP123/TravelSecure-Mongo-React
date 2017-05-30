var Trip  = require('../models/Trip');

exports.index = function(req, res) {
	Trip
  .find()
  .where('UserId').equals(req.user.id)
  .then(function(dbTrip) {
    res.render('trips/trips', {
		  layout: 'main-trips',
		  trip: dbTrip
	  });
  });
};

exports.createTrip = function(req, res) {

	// Add id from User onto req.body
	req.body.UserId = req.user.id;

  var newTrip = new Trip(req.body);

  newTrip.save().then(function(dbPost) {
    res.json(dbPost);
  });
};
