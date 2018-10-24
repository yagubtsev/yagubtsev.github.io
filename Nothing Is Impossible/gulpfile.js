var gulp = require('gulp'),
	bs   = require('browser-sync'),
	less = require('gulp-less');

gulp.task('server', function() {

    bs.init({
        server: './'
    });

    gulp.watch("less/*.less", ['less']);
    gulp.watch("*.html").on('change', bs.reload);
});

gulp.task('less', function() {
    return gulp.src("less/*.less")
        .pipe(less())
        .pipe(gulp.dest("css/"))
        .pipe(bs.stream());
});