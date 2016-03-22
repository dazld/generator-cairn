import gulp from 'gulp';
import liveReload from 'gulp-livereload';
import config from '../config';

gulp.task('images', ['clean:img'], function() {
    return gulp.src(`${config.ASSETS_IMG}/**/*`)
            .pipe(gulp.dest(config.STATIC_IMG))
            .pipe(liveReload());
});
