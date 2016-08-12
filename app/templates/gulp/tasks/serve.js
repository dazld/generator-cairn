import gulp from 'gulp';
// import config from '../config';
import { log, colors } from 'gulp-util';
import { spawn } from 'child_process';

let currentProcess = null;
let bootingProcess = null;

function checkForBoot(proc, chunk) {
    const chunkAsString = chunk.toString();
    if (/Magic/.test(chunkAsString)) {
        bootingProcess = null;
        if (currentProcess) currentProcess.kill();
        currentProcess = proc;
        proc.removeListener('data', checkForBoot);
        log(colors.green('Server up'));
        // liveReload.reload();
    }
}
function handleClose(proc, code) {
    if (code === 8) {
        log('Error detected, waiting for changes...');
    } else {
        log('node closed: ', code);
    }
    proc.removeListener('close', handleClose);
}

gulp.task('serve', function() {
    if (bootingProcess) bootingProcess.kill();
    const nextProcess = bootingProcess = spawn('node', ['server/dev-server']);
    nextProcess.on('close', handleClose.bind(null, nextProcess));
    nextProcess.stdout.on('data', checkForBoot.bind(null, nextProcess));
    nextProcess.stdout.pipe(process.stdout);
    nextProcess.stderr.pipe(process.stderr);
});

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (currentProcess) {
        currentProcess.kill();
    }
});
