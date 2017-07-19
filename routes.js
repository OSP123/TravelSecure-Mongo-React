module.exports = function(app){

		// Our model controllers (rather than routes)
		var users = require('./routes/users');
		var trips = require('./routes/trips');
		var pricing = require('./routes/pricing');

		app.use('/apis/users', users);
		app.use('/apis/trips', trips);
		app.use('/apis/pricing', pricing);
		//other routes..
}