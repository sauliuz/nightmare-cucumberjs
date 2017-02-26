[![Build Status](https://api.travis-ci.org/sauliuz/nightmare-cucumberjs.svg?branch=master)](https://travis-ci.org/sauliuz/nightmare-cucumberjs/)

## nightmare-cucumberjs

### Overview

This project is an example of BDD (behaviour driven development) setup with [nightmare](https://github.com/segmentio/nightmare) and [cucumberjs](https://github.com/cucumber/cucumber-js) frameworks.

You can use example setup in this project for creating BDD tests for your web project.

You can also setup continuous application monitoring for your web apps with the help of automated CI jobs.


### How to start using?
Clone this code repositary. Install all required nodejs packages with

	npm install

You must have [Grunt installed](http://gruntjs.com/installing-grunt) on your box.

You can now run

	grunt test
	
The output should **green** (passing tests):

	Feature: 
		I would like to monitor several websites
  	 	and validate that their titles are as expected.
  	
  		Scenario: httpbin.org website should be up and running
  		Given I visit httpbin.org website
  		Then website title should be "httpbin(1): HTTP Client Testing Service"
  	
  		Scenario: github.com website should be up and running
    	Given I visit github.com website
    	Then website title should be "GitHub · Where software is built"
    	
    	Scenario: wikipedia.org site should be up and running
    	Given I visit www.wikipedia.org website
    	Then website title should be "Wikipedia"
    	
By [@sauliuz](https://twitter.com/sauliuz) and [popularowl.com](http://www.popularowl.com "open source technologies, simplified") 
