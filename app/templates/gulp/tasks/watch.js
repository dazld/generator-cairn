import gulp from 'gulp';
import liveReload from 'gulp-livereload';
import config from '../config';
import snakeoil from '@dazld/snakeoil-certs';

gulp.task('watch', function() {
    liveReload.listen({
        key: snakeoil.serviceKey,
        cert: snakeoil.certificate
    });
    gulp.watch(`${config.ASSETS_SASS}/**/*.scss`, ['sass']);
    gulp.watch(`${config.ASSETS_IMG}/**/*`, ['images']);
    gulp.watch(`${config.ASSETS_FONTS}/**/*`, ['fonts']);
    gulp.watch(`${config.SERVER_DIR}/**/*`, ['serve']);
});
