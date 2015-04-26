var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var paths = {
  scss: ['theme/app.scss'],
  images: ['theme/img/**/*'],
};

gulp.task('scss', function() {
  return gulp.src(paths.scss)
    .pipe(sass({
      includePaths: ['node_modules/foundation/scss/']
    }))
    .pipe(gulp.dest('lib/'));
});

gulp.task('default', ['scss']);
