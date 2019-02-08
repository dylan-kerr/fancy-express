'use strict';

const express = require('express');

const auth = require('./auth');
const errorHandlers = require('./error-handlers');
const configureHandlebars = require('./configure-handlebars');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();
app.use(middleware);
auth.configure(app);
configureHandlebars(app);

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
app.use(routes);

app.use(errorHandlers(app));

module.exports = app;
