import gulp from 'gulp';
// import config from '../config';
import liveReload from 'gulp-livereload';
import { log, colors } from 'gulp-util';
import { spawn } from 'child_process';

let currentProcess = null;

function checkForBoot(chunk) {
    const chunkAsString = chunk.toString();
    if (/Magic/.test(chunkAsString)) {
        currentProcess.removeListener('data', checkForBoot);
        log(colors.green('Server up'));
        liveReload.reload();
    }
}
function handleClose(code) {
    if (code === 8) {
        log('Error detected, waiting for changes...');
    } else {
        log('node closed: ', code);
    }
    currentProcess.removeListener('close', handleClose);
}

gulp.task('serve', function() {
    if (currentProcess) {
        currentProcess.kill();
    }
    currentProcess = spawn('node', ['server/dev-server']);
    currentProcess.on('close', handleClose);
    currentProcess.stdout.on('data', checkForBoot);
    currentProcess.stdout.pipe(process.stdout);
    currentProcess.stderr.pipe(process.stderr);
});

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (currentProcess) {
        currentProcess.kill();
    }
});
