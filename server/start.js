'use strict';

const figlet = require('figlet');

module.exports = app => {
    const port = app.get('port');

    app.listen(port, () => {
        console.log(figlet.textSync(app.get('title')));
        console.log(`Running at http://localhost:${port}/.`);
    });
};
