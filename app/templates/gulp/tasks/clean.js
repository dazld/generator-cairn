import gulp from 'gulp';
import config from '../config';
import makeCleaner from '../util/make-cleaner';


function glob(path) {
    return `${path}/**/*`;
}

gulp.task('clean:js', makeCleaner(glob(config.STATIC_JS)));
gulp.task('clean:css', makeCleaner(glob(config.STATIC_CSS)));
gulp.task('clean:img', makeCleaner(glob(config.STATIC_IMG)));
gulp.task('clean:fonts', makeCleaner(glob(config.STATIC_FONTS)));
gulp.task('clean:manifest', makeCleaner(`${config.STATIC_DIR}/rev-manifest.json`));

gulp.task('clean', ['clean:js', 'clean:css', 'clean:img', 'clean:fonts', 'clean:manifest']);
