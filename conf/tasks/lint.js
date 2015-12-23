/*global require*/
(function lintTask(require) {
  'use strict';

  var gulp = require('gulp')
    , jshint = require('gulp-jshint')
    , eslint = require('gulp-eslint')
    , jscs = require('gulp-jscs')
    , stylish = require('jshint-stylish')
    , runSequence = require('run-sequence')
    , paths = require('../paths');

  gulp.task('js-lint', function onJsLint() {

    return gulp.src(paths.lib + paths.files.unminified)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failOnError())
      .pipe(jscs())
      .pipe(jscs.reporter())
      .pipe(jscs.reporter('fail'));
  });

  gulp.task('lint', function onLint(done) {

    return runSequence('js-lint', done);
  });
}(require));
