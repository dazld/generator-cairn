import gulp from 'gulp';
import size from 'gulp-size';
// import { log, colors } from 'gulp-util';
import rev from 'gulp-rev';
import revCssUrl from 'gulp-rev-css-url';
import config from '../config';

gulp.task('rev', ['clean:manifest', 'js'], function() {
    return gulp.src(`${config.STATIC_DIR}/**/*`, {
        base: config.STATIC_DIR
    })
    .pipe(rev())
    .pipe(revCssUrl())
    .pipe(size())
    .pipe(gulp.dest(config.STATIC_DIR))
    .pipe(rev.manifest())
    .pipe(gulp.dest(`${config.STATIC_DIR}/`));
});
