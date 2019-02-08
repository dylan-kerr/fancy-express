'use strict';

const express = require('express');

const auth = require('../auth');

const router = express.Router();

router.get('/', (req, res) => res.render('home'));

router.get('/account', auth.ensure, (req, res) => res.render('account'));

module.exports = router;
