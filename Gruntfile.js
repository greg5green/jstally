'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: ['dist/*'],
        compass: {
            dist: {
                options: {
                    sassDir: 'app/sass',
                    cssDir: 'dist/assets/css',
                    outputStyle: 'expanded'
                }
            }
        },
        connect: {
            options: {
                hostname: 'localhost',
                open: false
            },
            dist: {
                options: {
                    base: 'dist',
                    port: 9000,
                    livereload: true
                }
            },
            test: {
                options: {
                    base: 'tests',
                    port: 9001
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'app',
                        src: ['{,*/}*.html'],
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        cwd: 'app/img/',
                        src: ['{,*/}*.*'],
                        dest: 'dist/assets/img'
                    },
                    {
                        expand: true,
                        cwd: 'app/bower_components/jquery',
                        src: ['jquery.min.js'],
                        dest: 'dist/assets/js/vendor'
                    },
                    {
                        expand: true,
                        cwd: 'app/js',
                        src: ['{,*/}*.js'],
                        dest: 'dist/assets/js'
                    }
                ]
            }
        },
        modernizr: {
            devFile: 'app/bower_components/modernizr',
            outputFile: 'dist/assets/js/vendor/modernizr.min.js',
            files: [
                'dist/assets/css/{,*/}*.css',
                'dist/assets/js/{,*/}*.js',
                'dist/assets/js/vendor/{,*/}*.js'
            ],
            extra: {
                shiv: false,
                printshiv: true,
                load: false,
                mq: false,
                cssclasses: true
            },
            uglify: false
        },
        watch: {
            compass: {
                files: ['app/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:dist'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            copy: {
                files: ['app/{,*/}*.html', 'app/img/{,*/}*.*', 'app/js/{,*/}*.js'],
                tasks: ['copy:dist'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        }
    });

    grunt.registerTask('build', ['clean', 'compass:dist', 'copy:dist', 'modernizr']);
    grunt.registerTask('serve', ['compass:dist', 'copy:dist', 'modernizr', 'connect', 'watch']);
    grunt.registerTask('default', ['clean', 'compass:dist', 'copy:dist']);
};
