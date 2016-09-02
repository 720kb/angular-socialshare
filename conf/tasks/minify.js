/*global require*/
(function buildTask(require) {
  'use strict';

  var gulp = require('gulp')
    , plumber = require('gulp-plumber')
    , sourcemaps = require('gulp-sourcemaps')
    , paths = require('../paths')
    , header = require('gulp-header')
    , uglify = require('gulp-uglify')
    , rename = require('gulp-rename')
    , runSequence = require('run-sequence');

  gulp.task('minify', ['build'], function onMinify(done) {

    return runSequence([
      'minify-js'
    ], done);
  });

  gulp.task('minify-js', function onMinifyJs() {

    return gulp.src(paths.output + paths.files.unminified.js)
      .pipe(plumber())
      .pipe(sourcemaps.init({
        'loadMaps': true,
        'debug': true
      }))
      .pipe(uglify())
      .pipe(header(paths.banner))
      .pipe(sourcemaps.write('.', {
        'includeContent': false,
        'sourceRoot': '../lib'
      }))
      .pipe(rename(function onFileRename(path) {
        if (path.extname !== '.map') {
          path.basename += '.min';
        }
        return path;
      }))
      .pipe(gulp.dest(paths.output));
  });

}(require));
