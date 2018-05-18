var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('turn', function() {
    gulp.src(['app/scss/index.scss', 'app/scss/test.scss'])
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/css/'));
})

gulp.task('wt', () => {
    gulp.watch('app/scss/*.scss',['turn']);
});

