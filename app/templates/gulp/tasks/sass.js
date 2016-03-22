
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gutil from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import base64 from 'gulp-base64';
import cmq from 'gulp-combine-mq';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import liveReload from 'gulp-livereload';
import size from 'gulp-size';
import gulpif from 'gulp-if';

import config from '../config';

gulp.task('sass', ['clean:css'], function() {
    return gulp.src(config.ASSETS_SASS_MAIN)
            .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
            .on('error', function(err) {
                gutil.log(gutil.colors.red(`Error (${err.plugin}) - ${err.message}`));
                this.emit('end');
            })
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(base64({
                maxImageSize: 5000,
                extensions: ['svg', 'png', 'jpg', /\.jpg#datauri$/i]
            }))
            .pipe(autoprefixer(config.BROWSER_CONFIG))
            .pipe(cmq({
                beautify: false
            }))
            .pipe(csso())
            .pipe(size())
            .pipe(gulpif(!config.IS_PRODUCTION, sourcemaps.write()))
            .pipe(gulp.dest(config.STATIC_CSS))
            .pipe(liveReload({ port: config.LIVERELOAD_PORT }));
});
