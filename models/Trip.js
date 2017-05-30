'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var tripSchema = mongoose.Schema({

    name: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a username.']
    },
    destination: {
        type: String,
        min: [1, 'Please enter an address with at least 1 character'],
        required: [true, 'Please enter an address']
    },
    methodOfTransport: {
        type: String,
        min: [1, 'Your method of transport must be one of the choices provided'],
        required: [false, 'Please enter a method of transport']
    },
    arrivalDate: {
        type: String,
        min: [1, 'Please enter an arrival date with at least 1 character'],
        required: [true, 'Please enter an arrival date']
    },
    UserId: {
        type: String
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Trip', tripSchema);