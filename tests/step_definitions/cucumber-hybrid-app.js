// main step definitions file

var misbehave = require('./misbehave.js');
var Nightmare = require('nightmare');

// will hold nightmare instance
var nightmare = {};

module.exports = function() {

//////////////////
// preparations //
//////////////////
		
	this.BeforeFeatures(function(scenario, callback) {
		console.log('setting up nightmare..')		
		nightmare = Nightmare({ 
			show: false
		});
		callback();
	});

	this.Before(function(scenario, callback) {
		this.misbehave = null;
		this.misbehave = misbehave;	
		callback();
	});

	this.After(function(scenario, callback) {
		callback();
	});

	this.AfterFeatures(function(scenario, callback){
		//nightmare
		//.end()
		//.then(function () {
    		//  console.log('nightmare is now closed..');
    	        //})
	});

//////////////////////////////////////
// Gherking scenario implementation //
//////////////////////////////////////

	this.Given(/^I visit (.*) website$/, function(domain, callback) {
		this.misbehave.setDomain('http',domain);		
		callback();		
	});	


	this.Then(/^website title should be "(.*)"$/, function(siteTitle, callback) {			

		this.misbehave.assertTitle(siteTitle, nightmare, function(error, assertionResponse){

			// something went wrong at core cucumber department
			if(error){
				callback(new Error(error));
			}		

			if(assertionResponse.success == 'true') {
				callback();			
			} else {
				callback(JSON.stringify(assertionResponse));
			}		
		});		
	});

};

