'use strict';

const handlebars = require('express-handlebars');
const path = require('path');

const viewsPath = path.join(__dirname, 'views');
const handlebarsConfig = {
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(viewsPath, 'layouts'),
    partialsDir: path.join(viewsPath, 'partials')
};
const handlebarsEngine = handlebars(handlebarsConfig);

module.exports = app => {
    app.set('views', viewsPath);
    app.engine('.hbs', handlebarsEngine);
    app.set('view engine', '.hbs');
};
