'use strict';

const app = require('./server/app');
const start = require('./server/start');

app.set('title', 'Auth Test');
app.set('port', process.env.PORT || 9000);

start(app);
