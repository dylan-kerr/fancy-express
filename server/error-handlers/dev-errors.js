'use strict';

const errorhandler = require('errorhandler');

module.exports = [
    (err, req, _res, next) => {
        errorhandler.title = req.app.get('title');
        next(err);
    },
    errorhandler()
];
