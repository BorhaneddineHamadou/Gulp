'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass'); 

gulp.task('css', function(){
    return gulp.src('css/main.scss')
           .pipe(sass({outputStyle:'compressed'}))
           .pipe(prefix('last 2 versions'))
           .pipe(concat('test.css'))
           .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function(){
  return gulp.src('js/*.js')
         .pipe(concat('all.js'))
         .pipe(gulp.dest('dist/js'))  
});