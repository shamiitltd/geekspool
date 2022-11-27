const express = require('express');
const api = express.Router();
const { checkAuthentication, checkNotAuthenticated } = require('../middleware/verify');
const commonRoutes = require('./common');
const authRoutes = require('./auth');
const formRoutes = require('./form');
const profileRoutes = require('./profile');
const toolsRoutes = require('./tools');

api.use('/', commonRoutes); // Routing path
api.use('/', authRoutes); // Routing path
api.use('/', formRoutes); // Routing path
api.use('/', profileRoutes); // Routing path
api.use('/', toolsRoutes); // Routing path

api.get('/signin', checkNotAuthenticated, async (req, res) => {
    res.render('controllers/static/signinController', {
        user: ''
    });
})
api.get('/offline', async (req, res) => {
    res.render('controllers/static/offlineController', {
        user: req.user
    });
})


//set Different routes
api.get('/', async (req, res) => {
    res.render('controllers/landingController', {
        user: req.user
    });
})


api.get('/privacy-policy', (req, res) => {
    res.render('controllers/static/privacyPolicyController', {
        user: req.user
    });
})


api.get('/tools', checkAuthentication, (req, res) => {
    res.render('controllers/tools/toolsController', {
        user: req.user
    });
})

api.get('/pricing', checkAuthentication, (req, res) => {
    res.render('controllers/static/pricingController', {
        user: req.user
    });
})

api.get('/tutorials', checkAuthentication, (req, res) => {
    res.render('controllers/tutorials/tutorialsController', {
        user: req.user
    });
})

api.get('/*', (req, res) => {
    res.render('controllers/static/nopageController', {
        user: req.user
    });
})

module.exports = api;