module.exports = function (grunt) {
	grunt.initConfig({
		//This is look for any change in scss files in scss directory and then run the sass task
		sass: {
			dev: {
				files: {
					//path to your css and scss/sass file
					'css/style.css': 'scss/style.scss' 
				}
			}
		},
		cssmin: {
		  options: {
		  },
		  target: {
		    files: {
		      'css/style.min.css': 'css/style.css'
		    }
		  }
		},
		inlinecss: {
	        main: {
	            options: {
	            },
	            files: {
	                'files/out.html': 'files/in.html'
	            }
	        }
	    }
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-inline-css');

	// register task
	grunt.registerTask('default', ['sass','cssmin','inlinecss']);
};