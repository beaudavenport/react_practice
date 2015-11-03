var gulp = require('gulp');
var browserify = require('browserify');
var stream = require('vinyl-source-stream');

gulp.task('default', function() {
  var b = browserify('app.js')
    .bundle();
  b.pipe(stream('main.js')).pipe(gulp.dest('public'));
});

gulp.task('pizza', function() {
  var b = browserify('pizzaApp.js')
    .bundle();
  b.pipe(stream('main.js')).pipe(gulp.dest('public'));
})
