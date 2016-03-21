
import config from '../config';

import browserify from 'browserify';
import watchify from 'watchify';
import envify from 'envify';

import gulp from 'gulp';

gulp.task('js', ['clean:js'], function() {
    console.log('bfy task');
});
