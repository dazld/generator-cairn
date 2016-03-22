import gulp from 'gulp';
// import config from '../config';
import liveReload from 'gulp-livereload';
import { log, colors } from 'gulp-util';
import { spawn } from 'child_process';

let currentProcess = null;

function checkStatus(chunk) {
    const chunkAsString = chunk.toString();
    if (/Magic/.test(chunkAsString)) {
        currentProcess.removeListener('data', checkStatus);
        log(colors.green('Server up'));
        liveReload();
    }
}
function handleError(code) {
    if (code === 8) {
        log('Error detected, waiting for changes...');
    } else {
        log('node closed: ', code);
    }
    currentProcess.removeListener('close', handleError);
}

gulp.task('serve', function() {
    if (currentProcess) {
        currentProcess.kill();
    }
    currentProcess = spawn('node', ['server/dev-server']);
    currentProcess.on('close', handleError);
    currentProcess.stdout.on('data', checkStatus);
    currentProcess.stdout.pipe(process.stdout);
    currentProcess.stderr.pipe(process.stderr);
});

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (currentProcess) {
        currentProcess.kill();
    }
});
