import gulp from 'gulp';
import liveReload from 'gulp-livereload';
import config from '../config';

gulp.task('fonts', ['clean:fonts'], function() {
    return gulp.src(`${config.ASSETS_FONTS}/**/*`)
            .pipe(gulp.dest(config.STATIC_FONTS))
            .pipe(liveReload());
});
