
import config from '../config';

import browserify from 'browserify';
import watchify from 'watchify';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import size from 'gulp-size';
import notify from 'gulp-notify';
import liveReload from 'gulp-livereload';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';

import gulp from 'gulp';


const baseOptions = {
    entries: config.ASSETS_JS_MAIN,
    debug: config.USE_SOURCEMAPS,
    cache: {},
    packageCache: {},
    plugin: []
};

if (!config.IS_PRODUCTION) {
    baseOptions.plugin = baseOptions.plugin.concat(watchify);
}

const compiler = browserify(baseOptions);

compiler.transform('babelify');
compiler.transform('envify', {
    global: true,
    NODE_ENV: process.env.NODE_ENV,
    _: 'purge'
});

function bundle() {
    return compiler.bundle()
                    .on('error', notify.onError('Error: <%= error.message %>'))
                    .on('error', function errorHandler(err) {
                        gutil.log(gutil.colors.red(`Error (${err.plugin}) - ${err.message}`));
                        this.emit('end');
                    })
                    .pipe(source('bundle.js'))
                    .pipe(buffer())
                    .pipe(gulpif(config.IS_PRODUCTION, uglify()))
                    .pipe(size())
                    .pipe(gulp.dest(config.STATIC_JS))
                    .pipe(liveReload()); // @todo figure out a better way of refreshing server
}

compiler.on('log', gutil.log);
compiler.on('error', gutil.log);

compiler.on('update', function() {
    console.log.apply(console, ['Updated: '].concat([].slice.call(arguments)));
    bundle();
    // gulp.run('serve'); @todo should reload server too
});

gulp.task('js', ['clean:js'], () => bundle());
