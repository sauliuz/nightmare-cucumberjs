
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

	grunt.loadNpmTasks('grunt-cucumberjs');
	grunt.registerTask('test', ['cucumberjs']);
};
