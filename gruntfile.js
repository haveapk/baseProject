module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dist: {
            src: 'css/main.less',
            dest: 'css/main.css'

            },
            options: {
                cleancss:true,
                ieCompat:true
            }

        },

        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'css/main.min.css': ['css/main.css']
            }
          }
        },

        uglify: {
            js: {
                files: {
                    'scripts/main.min.js': ['scripts/main.js']
                }
            }
        },

        watch:{
            scripts: {
                files: [
                    'css/*.less',
                    'scripts/main.js',
                    'index.html',
                    'fonts/*.less'
                ],
                tasks: ['uglify','less','livereload'],
                options: {
                    livereload:true
                }
            }
        },
        livereload:{
            options: {
                base: '/',
            },
            files: [
                'css/main.less',
                'scripts/main.js',
                'index.html',
            ]
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-livereload');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default',['uglify','less','watch','livereload']);
    grunt.registerTask('publish', ['less', 'uglify', 'cssmin']);
};