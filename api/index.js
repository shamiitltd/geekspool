const express = require('express');
const api = express.Router();
const verify = require('../middleware/verify');
const authRoutes = require('./auth');

api.use('/', authRoutes); // Routing path

api.get('/signin', verify.checkNotAuthenticated, async (req, res) => {
    res.render('controllers/signinController', {
        user: ''
    });
})
api.get('/offline', async (req, res) => {
    res.render('controllers/offlineController', {
        user: req.user
    });
})

api.get('/help', (req, res) => {
    res.render('landing/help');
})

//set Different routes
api.get('/', async (req, res) => {
    res.render('controllers/landingController', {
        user: req.user
    });
})

api.get('/*/new', verify.checkAuthentication, (req, res) => {
    res.render('controllers/containerWithSearchForm', {
        user: req.user
    });
})

api.get('/profile/*', (req, res) => {
    res.render('controllers/profileController', {
        user: req.user
    });
})
//api.get('/profile/*', verify.checkAuthentication, (req, res) => {
//    res.render('controllers/profileController', {
//        user: req.user
//    });
//})

api.get('/*/edit', verify.checkAuthentication, (req, res) => {
    res.render('controllers/containerWithSearchForm', {
        user: req.user
    });
})

api.get('/*', (req, res) => {
    res.render('controllers/containerWithSearchForm', {
        user: req.user
    });
})

module.exports = api;