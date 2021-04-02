'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass'); 
var connect = require('gulp-connect');

gulp.task('css', function(){
    return gulp.src('css/main.scss')
           .pipe(sass({outputStyle:'compressed'}))
           .pipe(prefix('last 2 versions'))
           .pipe(concat('test.css'))
           .pipe(gulp.dest('dist/css'))
           .pipe(connect.reload())
})

gulp.task('js', function(){
  return gulp.src('js/*.js')
         .pipe(concat('all.js'))
         .pipe(gulp.dest('dist/js'))
         .pipe(connect.reload())  
});

gulp.task('connect', function(){
  connect.server({
         root:'./dist/',
         livereload:true
  });
});

gulp.task('watch', function(){
  gulp.watch('css/*.scss', ['css']);
  gulp.watch('js/*.js', ['js']);
});

gulp.task('default', gulp.series('connect', 'watch'));