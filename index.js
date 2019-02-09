'use strict';

const app = require('./server/app');
const start = require('./server/start');

app.set('title', 'Fancy Express');
app.set('port', process.env.PORT || 9000);

start(app);
