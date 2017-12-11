var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', () => {
    return gulp.src('index.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});