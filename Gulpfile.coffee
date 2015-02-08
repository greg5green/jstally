'use strict'

del = require 'del'
gulp = require 'gulp'
$ = require('gulp-load-plugins')(camelize: true)
run = require 'run-sequence'

gulp.task 'clean', (cb) ->
  del 'dist', cb

gulp.task 'fonts', ->
  gulp.src 'app/bower_components/sass-bootstrap/dist/fonts/*'
    .pipe gulp.dest 'dist/assets/fonts'

gulp.task 'scripts', (cb) ->
  run ['scripts:js', 'scripts:coffee', 'scripts:vendor'], cb

gulp.task 'scripts:coffee', ->

gulp.task 'scripts:js', ->
  gulp.src 'app/js/**/*'
    .pipe gulp.dest 'dist/assets/js'

gulp.task 'scripts:vendor', ->
  gulp.src ['app/bower_components/jquery/dist/jquery.min.js', 'app/bower_components/lodash/dist/lodash.min.js']
    .pipe gulp.dest 'dist/assets/js/vendor'

gulp.task 'styles', ->
  gulp.src 'app/sass/**/*'
    .pipe $.sass()
    .pipe $.autoprefixer cascade: false
    .pipe gulp.dest 'dist/assets/css'

gulp.task 'views', ->
  gulp.src 'app/*.html'
    .pipe gulp.dest 'dist'

gulp.task 'default', (cb) ->
  run 'clean', ['fonts', 'scripts', 'styles', 'views'], cb
