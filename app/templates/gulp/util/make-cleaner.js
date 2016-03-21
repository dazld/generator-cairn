
import del from 'del';

function makeCleaner(path) {
    return function(done) {
        del([
            path
        ]).then(function(paths) {
            console.log('Deleted files and folders:\n', paths.join('\n'));
            done();
        });
    }
}

export default makeCleaner;
