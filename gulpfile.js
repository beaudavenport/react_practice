var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var stream = require('vinyl-source-stream');

gulp.task('default', function() {
  var b = browserify('app.js')
    .transform(babelify)
    .bundle();
  b.pipe(stream('main.js')).pipe(gulp.dest('public'));
});

gulp.task('pizza', function() {
  var b = browserify('pizzaApp.js')
    .transform(babelify)
    .bundle();
  b.pipe(stream('main.js')).pipe(gulp.dest('public'));
})
