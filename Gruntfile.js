
module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		cucumberjs: {
			src: 'tests',
			options: {
				format: 'pretty',
				steps: 'tests/step_definitions'
			}
		}
	});

	grunt.loadNpmTasks('grunt-cucumber');
	grunt.registerTask('test', ['cucumberjs']);
};