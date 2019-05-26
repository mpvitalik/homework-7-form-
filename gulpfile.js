var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', done => {
	gulp.src('./src/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/css'));
	done();
});

gulp.task('sass:watch', function() {
	gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});