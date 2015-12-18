var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('server', function () {
    return gulp.src([
      'src/server/*.js'
    ])
      .pipe(concat('server.build.js'))
      .pipe(gulp.dest('./build'));
})

gulp.task('scripts', function () {
    return gulp.src([
      'src/app.js',
      'src/scripts/*.js'
    ])
      .pipe(concat('app.build.js'))
      .pipe(gulp.dest('./build'));
})

gulp.task('default', ['server', 'scripts'])