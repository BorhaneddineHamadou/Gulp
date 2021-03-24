'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('cssConcat', function(){
    return gulp.src('css/*.css')
           .pipe(concat('main.css'))
           .pipe(gulp.dest('dist/css'))
})

gulp.task('jsConcat', function(){
  return gulp.src('js/*.js')
         .pipe(concat('all.js'))
         .pipe(gulp.dest('dist/js'))  
});