'use strict';

const devErrors = require('./dev-errors');
const notFound = require('./not-found');

module.exports = app => [
    notFound,
    devErrors(app)
];
