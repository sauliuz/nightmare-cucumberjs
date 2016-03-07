
// library for abstracting complex
// methods in step-definition files
// 
// each funcional method expects the instance 
// of nightmare object to be passed to it.


// setup //

var build_misbehave = function() {
	var misbehave = new Misbehave('http','localhost');
	return misbehave;
}


function Misbehave(scheme, domain) {
	this.domain = scheme + '://' + domain;
}

////////////////////////////
// main funcionality //
////////////////////////////

// Generic assertion result
var getAssertionResult = function(success, expected, actual) {
    return {
        success: success,
        expected: expected,
        actual: actual        
    };
};

// Allow to set mode
Misbehave.prototype.setDomain = function(scheme,domain) {
	if (!scheme){ scheme = 'http';}
	if (!domain){ domain = 'localhost';}
	this.domain = scheme + '://' + domain;
};


Misbehave.prototype.assertTitle = function(expectedTitle, nightmare, callback) { // callback(error, response)

	// nightmare for evaluating hybrid app
    nightmare
    	.goto(this.domain)
    	.evaluate(function(){
    		return document.title;
  		})
  		.then(function(actualTitle){  		
    		// validating if title is expected
    		if (expectedTitle == actualTitle) {    			
    			callback(null, getAssertionResult('true',expectedTitle, actualTitle));
    		} else {   			
    			callback(null, getAssertionResult('false',expectedTitle, actualTitle));
    		}    		
  		})
};

module.exports = build_misbehave();
