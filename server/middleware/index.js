'use strict';

const bodyParser = require('./body-parser');
const flash = require('./flash');
const requestLogger = require('./request-logger');
const session = require('./session');

module.exports = [
    requestLogger,
    bodyParser,
    session,
    flash
];
