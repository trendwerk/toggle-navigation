'use strict';

/**
 * Require dependencies
 */
var gulp = require('gulp'),
    cache = require('gulp-cached'),
    beep = require('beepbeep'),
    plumber = require('gulp-plumber'),
    lint = require('gulp-scss-lint');

/**
 * Setup files to watch
 */
var files = [
  '**/*.scss',
  '!node_modules/**/*.*'
];

/**
 * Error handling
 */
var gulp_src = gulp.src;

gulp.src = function() {
  return gulp_src.apply(gulp, arguments)

  .pipe(plumber(function(error) {
    beep();
  }));
};

/**
 * SCSS lint
 */
gulp.task('lint', function() {
  return gulp.src(files)

  // Use cache to filter out unmodified files
  .pipe(cache('lint'))

  // Lint
  .pipe(lint({
    'config': 'config/lint/scss.yml'
  }))

  // Make reporter fail task on error
  .pipe(lint.failReporter());
});

/**
 * Watch
 */
gulp.task('default', function() {
  gulp.watch(files, ['lint']);
});
