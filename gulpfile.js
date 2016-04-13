var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  del = require('del'),
  minifyHTML = require('gulp-minify-html'),
  karma = require('karma').server,
  gulp = require('gulp');
  
gulp.task('minify', function() {
  gulp.src(['!assets/js/*.min.js', 'assets/js/*.js'])
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename += ".min";
    }))
    .pipe(gulp.dest('minified'));

  gulp.src('index.html')
    .pipe(minifyHTML())
    .pipe(rename(function(path) {
      path.basename += ".min"
    }))
    .pipe(gulp.dest('minified'))

  gulp.src(['!assets/css/*.min.css', 'assets/css/*.css'])
    .pipe(minifyCSS({
      keepBreaks: true
    }))
    .pipe(rename(function(path) {
      path.basename += ".min"
    }))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('tests', function(done) {
  return karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('clean', function(cb) {
  del(['minified/**'], cb);
});