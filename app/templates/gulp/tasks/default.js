import gulp from 'gulp';
// import config from '../config';

gulp.task('default', ['sass', 'js', 'assets', 'serve', 'watch']);
gulp.task('build', ['clean', 'sass', 'js', 'assets', 'rev']);
