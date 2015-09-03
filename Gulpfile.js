var gulp  = require('gulp');
var shell = require('gulp-shell');
 
gulp.task('shell', function () {
  return gulp.src('original/')
    .pipe(shell(
      'svgo -f original/ -o compressed/ --multipass -p 2'
    ));
});