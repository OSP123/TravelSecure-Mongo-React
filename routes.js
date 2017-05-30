module.exports = function(app){

		// Our model controllers (rather than routes)
		var application = require('./routes/application');
		var users = require('./routes/users');
		var trips = require('./routes/trips');
		var pricing = require('./routes/pricing');

		app.use('/', application);
		app.use('/users', users);
		app.use('/trips', trips);
		app.use('/pricing', pricing);
		//other routes..
}