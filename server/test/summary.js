var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

//Importing our todo model for our unit testing.
var User = require('../models/User');

describe("Get all Users", function(){
     // Test will pass if we get all todos
    it("should return all users", function(done){
        var UserMock = sinon.mock(User);
        var expectedResult = {status: true, user: []};
        UserMock.expects('find').yields(null, expectedResult);
        User.find(function (err, result) {
            UserMock.verify();
            UserMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    // Test will pass if we fail to get a todo
    it("should return error", function(done){
        var UserMock = sinon.mock(User);
        var expectedResult = {status: false, error: "Something went wrong"};
        UserMock.expects('find').yields(expectedResult, null);
        User.find(function (err, result) {
            UserMock.verify();
            UserMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});

// Test will pass if the todo is saved
describe("Post a new User", function(){

    it("should create new user", function(done){
        var UserMock = sinon.mock(new User({ username: 'meowbutt', email: 'someperson@example.com', password: User.generateHash('acha123A!')}));
        var user = UserMock.object;
        var expectedResult = { status: true };
        UserMock.expects('save').yields(null, expectedResult);
        user.save(function (err, result) {
            UserMock.verify();
            UserMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
    // Test will pass if the todo is not saved
    it("should return error, if post not saved", function(done){
        var UserMock = sinon.mock(new User({ username: 'meowbutt', email: 'someperson@example.com', password: User.generateHash('acha123A!')}));
        var user = UserMock.object;
        var expectedResult = { status: false };
        UserMock.expects('save').yields(expectedResult, null);
        user.save(function (err, result) {
            UserMock.verify();
            UserMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});

