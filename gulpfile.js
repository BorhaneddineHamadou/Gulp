'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer') 

gulp.task('css', function(){
    return gulp.src('css/*.css')
           .pipe(concat('main.css'))
           .pipe(prefix('last 2 versions'))
           .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function(){
  return gulp.src('js/*.js')
         .pipe(concat('all.js'))
         .pipe(gulp.dest('dist/js'))  
});