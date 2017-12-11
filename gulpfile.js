var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', () => {
    return gulp.src('index.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

gulp.task('fun', () => {
    return gulp.src('forFun/*.scss')
    .pipe(watch())
    .pipe(sass())
    .pipe(gulp.dest('app/css/forFun'));
});