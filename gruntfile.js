module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['styles/sass/*.scss'],
                tasks: ['sass', 'cssmin', 'uglify']
            }
        },
        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: {
                    'js/main.min.js' : ['js/main.js']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'styles/styles.css': 'styles/sass/styles.scss'
                }
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'styles/',
                    src: [ 'styles.css', '!*.min.css'],
                    dest: 'styles/',
                    ext: '.min.css'
                }]
            }
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

};