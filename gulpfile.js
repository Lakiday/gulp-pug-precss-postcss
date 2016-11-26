var gulp = require('gulp');//
var pug = require('gulp-pug');
var changed = require('gulp-changed');//
var sass = require('gulp-sass');//
var postcss    = require('gulp-postcss');//
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();//

gulp.task('pug', function () {
    return gulp.src('src/**/*.pug')
        .pipe(changed('dist', {extension: '.html'}))
        .pipe(pug())
        .pipe(gulp.dest('dist'))
});

gulp.task('style', function () {
    return gulp.src('src/**/*.sass')
        .pipe(changed('dist',{extension: '.css'}))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe( postcss([ require('postcss-fixes'), require('autoprefixer'), require('rucksack-css'), require('precss') ,require('oldie'), require('cssnano')] ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['style', 'pug'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/**/*.sass", ['style']);
    gulp.watch("dist/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);