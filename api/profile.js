const express = require('express');
const api = express.Router();
const { checkAuthentication, checkNotAuthenticated } = require('../middleware/verify');
const { profileUi } = require('../model/profile');

api.get('/profile/:id/', (req, res) => {
    const {
        id
    } = req.params;
    profileUi(req, res, 'controllers/profileController', id);
})

module.exports = api;