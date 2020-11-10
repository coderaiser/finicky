'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape test/*.js',
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': () => run('watcher', 'npm test'),
    'lint': () => 'putout lib test *.js *.md',
    'fix:lint': () => run('lint', '--fix'),
    'clean': () => 'rimraf legacy dist',
    'coverage': () => 'nyc npm test',
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
};

