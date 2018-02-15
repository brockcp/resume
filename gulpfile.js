var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var useref = require('gulp-useref');
var browserSync = require('browser-sync');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//minify -> gulp useref
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('docs'))
});
//<!-- build:<type> <path> -->
//<!-- endbuild -->


// Compile Sass
gulp.task('sass', function() {
    return gulp.src('app.scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
      stream: true
    }))
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('docs'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('docs/js'));
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//direct browser sync to root folder
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
     baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
