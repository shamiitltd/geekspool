const express = require('express');
const routes = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { callbackAuthenticator, registerUserFunction, resetNewPasswordFunction, resetPassWithEmail, sendresetpassmail } = require('../model/auth');

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

routes.get('/resetpassword/:email', async (req, res) => {
    const {
        email
    } = await req.params;
    sendresetpassmail(email, res);
})

routes.get('/auth/resetpass', async (req, res) => {
    const {
        email,
        token
    } = req.query;
    if (email && token) {
        const fileLocation = 'controllers/resetpassController';
        resetPassWithEmail(fileLocation, email, token, res);
    } else {
        res.redirect('/nopage');
    }
})


routes.get('/signOutPath', async (req, res) => {
    req.logOut();
    res.redirect('/signin');
})

routes.post('/signinUser', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        //console.log(err, user, info);
        if (err) {
            return res.send(info.message);
        }
        if (!user) {
            return res.send(info.message);
            // return res.redirect( '/signin' );
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.send('Authentication error');
            }
            return res.send('success');
            // return res.redirect( '/users/' + user.username );
        });
    })(req, res, next);
});

routes.post('/registerNewUser', async (req, res) => {
    let dataObject = req.body;
    dataObject.password = await bcrypt.hash(req.body.password, saltRounds);
    registerUserFunction(dataObject, res);
})

routes.post('/resetNewPassword', async (req, res) => {
    let dataObject = req.body;
    dataObject.password = await bcrypt.hash(req.body.password, saltRounds);
    resetNewPasswordFunction(dataObject, res);
})


module.exports = routes;