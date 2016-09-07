const gulp = require('gulp');
const browserify = require('gulp-browserify');
const webserver = require('gulp-webserver');

const src = './src';
const app = './build/app';

gulp.task('js', function() {
  return gulp.src(src + '/js/App.js')
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'));
});

gulp.task('html', function() {
  gulp.src(app + '/**/*.html');
});

gulp.task('css', function() {
  gulp.src(app + '/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch(src + '/js/**/*.js', ['js']);
  gulp.watch(app + '/css/**/*.css', ['css']);
  gulp.watch([app + '/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src(app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
