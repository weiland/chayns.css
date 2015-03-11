var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var plumber      = require('gulp-plumber');

var config = require('./config.js');

// build the scss files to final file
gulp.task('build', function () {
  return gulp.src(config.src + '/chayns.scss')
    .pipe(plumber())
    //.pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    //.on('error', handleErrors)
    //.pipe(sourcemaps.write(config.dist))
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dist))
    .pipe(browserSync.reload({stream:true}));
});

// watches local files and recompiles the sass on change
gulp.task('watch', function(callback) {
  gulp.watch('src/*.scss', ['build']);
});

// local dev server serving an example dev page to see changes
gulp.task('server', function() {
    browserSync(config.server);
});

gulp.task('dev', ['watch', 'server']);

gulp.task('default', ['watch']);
