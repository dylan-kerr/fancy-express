'use strict';

const devErrors = require('./dev-errors');
const notFound = require('./not-found');

module.exports = [
    notFound,
    devErrors
];
