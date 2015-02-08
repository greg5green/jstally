'use strict'

del = require 'del'
gulp = require 'gulp'
$ = require('gulp-load-plugins')(camelize: true)
mainBowerFiles = require 'main-bower-files'
run = require 'run-sequence'
argv = require('yargs').argv

gulp.task 'clean', (cb) ->
  del 'dist', cb

gulp.task 'fonts', ->
  gulp.src 'bower_components/sass-bootstrap/dist/fonts/*'
    .pipe gulp.dest 'dist/assets/fonts'

gulp.task 'scripts', (cb) ->
  run ['scripts:js', 'scripts:coffee', 'scripts:vendor'], cb

gulp.task 'scripts:coffee', ->

gulp.task 'scripts:js', ->
  gulp.src 'app/js/**/*'
    .pipe gulp.dest 'dist/assets/js'

gulp.task 'scripts:vendor', ->
  filteredBowerFiles = mainBowerFiles().filter (file) -> !(/bootstrap-sass/.test file)
  isProd = argv.prod?

  gulp.src filteredBowerFiles
    .pipe $.sourcemaps.init()
    .pipe $.concat 'vendor.js'
    .pipe $.if isProd, $.uglify()
    .pipe $.sourcemaps.write '.'
    .pipe gulp.dest 'dist/assets/js'

gulp.task 'styles', ->
  gulp.src 'app/sass/**/*'
    .pipe $.sass includePaths: ['bower_components/']
    .pipe $.autoprefixer cascade: false
    .pipe gulp.dest 'dist/assets/css'

gulp.task 'views', ->
  gulp.src 'app/*.html'
    .pipe gulp.dest 'dist'

gulp.task 'default', (cb) ->
  run 'clean', ['fonts', 'scripts', 'styles', 'views'], cb
