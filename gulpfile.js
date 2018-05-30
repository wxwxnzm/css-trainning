var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');

gulp.task('turn', function() {
    gulp.src(['app/scss/index.scss', 'app/scss/test.scss'])
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/css/'));
})

gulp.task('wt', () => {
    gulp.watch('app/scss/*.scss',['turn']);
});

gulp.task('turn-less', function() {
    // gulp.src(['app/scss/index.less', 'app/scss/test.less'])
    gulp.src(['app/less/index.less'])
        .pipe(less({outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/css/'));
})