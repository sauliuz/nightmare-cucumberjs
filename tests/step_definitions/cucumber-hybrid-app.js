// main step definitions file

var misbehave = require('./misbehave.js');
var Nightmare = require('nightmare');
var jsonfile = require('jsonfile');
var fs = require('fs');

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

		// remove failed.json if exists
        fs.exists('failed.json', function(exists) {
                if(exists) {
                        console.log('cleaning temp files');
                        fs.unlink('failed.json');
                }
        });

        // good to move forward
        callback();
	});

	this.Before(function(scenario, callback) {
		this.misbehave = null;
		this.misbehave = misbehave;	
		callback();
	});

	this.After(function(scenario, callback) {
		// capture failed scenarios in file
        if(scenario.isFailed()){
                var file = 'failed.json';
                var entry = {scenario: 'failed'};

                jsonfile.writeFile(file, entry, function (err) {
                        console.log('recording failed scenario');
                });
        }
        
        // good to move forward
        callback();
	});

	this.AfterFeatures(function(scenario, callback){
		nightmare
			.end()
			.then(function () {
    			console.log('nightmare is now closed..');
    		})
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

