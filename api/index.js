const express = require('express');
const api = express.Router();
const { checkAuthentication, checkNotAuthenticated } = require('../middleware/verify');
const { profileUi } = require('../model/profile');
const authRoutes = require('./auth');

api.use('/', authRoutes); // Routing path

api.get('/signin', checkNotAuthenticated, async (req, res) => {
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


api.get('/rss/new', checkAuthentication, (req, res) => {

    res.render('controllers/rssController', {
        user: req.user,
        
    });
})

//api.get('/*/new', checkAuthentication, (req, res) => {
//    res.render('controllers/containerWithSearchForm', {
//        user: req.user
//    });
//})

api.get('/profile/:id/', (req, res) => {
    const {
        id
    } = req.params;
    profileUi(req, res, 'controllers/profileController', id);
    res.render('controllers/profileController', {
        user: req.user, dataObject, paginator
    });
})
//api.get('/profile/*', checkAuthentication, (req, res) => {
//    res.render('controllers/profileController', {
//        user: req.user, dataObject, paginator
//    });
//})

api.get('/*/edit', checkAuthentication, (req, res) => {
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