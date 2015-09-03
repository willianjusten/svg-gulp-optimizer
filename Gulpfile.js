var gulp  = require('gulp');
var shell = require('gulp-shell');
var svgstore = require('gulp-svgstore');
var svgfallback = require('gulp-svgfallback');
 
// optimizer task
gulp.task('shell', function () {
  return gulp.src('original/')
    .pipe(shell(
      'svgo -f original/ -o compressed/ --multipass -p 2'
    ));
});

// combine svg
gulp.task('svgstore', function () {
    return gulp
        .src('compressed/*.svg')
        .pipe(svgstore())
        .pipe(gulp.dest('build/'));
});

// generate png
gulp.task('svgfallback', function () {
    return gulp
        .src('original/*.svg')
        .pipe(svgfallback())
        .pipe(gulp.dest('png/'));
});

gulp.task('default', ['shell', 'svgstore', 'svgfallback']);