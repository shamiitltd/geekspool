const express = require('express');
const routes = express.Router();
const passport = require('passport');
const { callbackAuthenticator } = require('../model/auth');

routes.get('/auth/facebook',
    passport.authenticate('facebook', {
        scope: ['email']
    }));

routes.get('/auth/facebook/callback', function (req, res, next) {
    callbackAuthenticator('facebook', req, res, next);
});


routes.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

routes.get('/auth/google/callback', function (req, res, next) {
    callbackAuthenticator('google', req, res, next);
});


routes.get('/auth/linkedin',
    passport.authenticate('linkedin', {
        scope: ['r_liteprofile', 'r_emailaddress']
    }));
routes.get('/auth/linkedin/callback', function (req, res, next) {
    callbackAuthenticator('linkedin', req, res, next);
});

module.exports = routes;