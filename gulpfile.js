require('babel-register');
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var stream = require('vinyl-source-stream');
var connect = require('gulp-connect');
var mocha = require('gulp-mocha');

gulp.task('pizza', function() {
  var b = browserify('pizzaApp.js')
    .transform(babelify)
    .bundle();
  b.pipe(stream('main.js')).pipe(gulp.dest('public'));
});

gulp.task('serve-pizza', function() {
  connect.server({
    root: 'public',
    port: 5000
  });
});

gulp.task('test-pizza', function() {
  return gulp.src('__tests__/**/*')
  .pipe(mocha());
})
