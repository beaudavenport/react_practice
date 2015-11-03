var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var stream = require('vinyl-source-stream');
var connect = require('gulp-connect');
var port = 5000;

gulp.task('babel-browserify', function() {
  var b = browserify('app.js')
    .transform(babelify)
    .bundle();
  b.pipe(stream('main.js')).pipe(gulp.dest('public'));
});

gulp.task('serve', function () {
  connect.server({
    livereload: true,
    port: port
  });
});

gulp.task('jsReload', function () {
  gulp.src('js/**/*.js')
  .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('*.html')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('*.html',['html']);
  gulp.watch('js/**/*.js',['babel-browserify']);
  gulp.watch('js/**/*.js',['jsReload']);
});

gulp.task('default', ['babel-browserify','serve','watch']);
