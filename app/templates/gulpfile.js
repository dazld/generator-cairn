'use strict';
require('babel-core/register')();
const rd = require('require-dir');
rd('gulp/tasks', {
    recurse: true
});
