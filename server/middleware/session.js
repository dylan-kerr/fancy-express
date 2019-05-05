'use strict';

const Sequelize = require('sequelize');
const session = require('express-session');
const sessionSequelize = require('connect-session-sequelize');

const sessionDb = new Sequelize(
    'sqlite://session.sqlite',
    {
        logging: false
    }
);
const sessionStore = new (sessionSequelize(session.Store))({
    db: sessionDb
});
sessionStore.sync();

module.exports = session({
    resave: false,
    saveUninitialized: false,
    secret: 'thisismysecret',
    store: sessionStore
});
