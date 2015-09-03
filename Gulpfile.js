var gulp  = require('gulp');
var shell = require('gulp-shell');
var svgstore = require('gulp-svgstore');
 
// optimizer task
gulp.task('shell', function () {
  return gulp.src('original/')
    .pipe(shell(
      'svgo -f original/ -o compressed/ --multipass -p 2'
    ));
});

gulp.task('svgstore', function () {
    return gulp
        .src('compressed/*.svg')
        .pipe(svgstore())
        .pipe(gulp.dest('build/'));
});