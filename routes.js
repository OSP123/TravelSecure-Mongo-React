module.exports = function(app){

		// Our model controllers (rather than routes)
		var users = require('./routes/users');
		var trips = require('./routes/trips');
		var pricing = require('./routes/pricing');

		app.use('/api/users', users);
		app.use('/api/trips', trips);
		app.use('/api/pricing', pricing);
		//other routes..
}