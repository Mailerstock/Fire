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
                    webResources: {
                        images: false,
                    }
                },
	            files: {
	                'templates/output/index.html': 'templates/input/index.html'
	            }
	        }
	    }
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-inline-css');
	grunt.loadNpmTasks('grunt-browser-sync');

	// register task
	grunt.registerTask('default', ['sass','cssmin','inlinecss']);
};