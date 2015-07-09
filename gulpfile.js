var gulp = require('gulp'),
  clean = require('gulp-clean'),
  jshint = require("gulp-jshint"),
  concat = require('gulp-concat');
  uglify = require("gulp-uglify");

gulp.task('clean', function() {
  return gulp.src('dist', {
      read: false
    })
    .pipe(clean());
});

gulp.task('source-minify', function() {
  gulp.src(['./src/*.js']) // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(uglify())
    .pipe(concat('leapmouse.min.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task('bundle-minify', function() {
  gulp.src(['bower_components/leapjs/leap-0.6.4.min.js', './src/*.js']) // path to your files
    .pipe(concat('leapmouse-bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/'));
});

gulp.task('dist', ['clean', 'source-minify', 'bundle-minify'], function() {
  console.log('Ready!')
});


//'bower_components/leapjs/leap-0.6.4.min.js'
