'use strict';

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy(
    (username, password, done) => {
        if (username !== 'username') {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (password !== 'password') {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, username);
    }
));

module.exports.configure = app => {
    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/login', (req, res) => res.render('login', { flash: JSON.stringify(req.flash(), null, 4) }));

    app.post('/login', passport.authenticate('local', {
        successReturnToOrRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};

module.exports.ensure = ensureLoggedIn('/login');
