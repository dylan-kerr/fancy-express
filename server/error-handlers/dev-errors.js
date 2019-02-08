'use strict';

const errorhandler = require('errorhandler');

module.exports = app => {
    errorhandler.title = app.get('title');

    return errorhandler();
};
