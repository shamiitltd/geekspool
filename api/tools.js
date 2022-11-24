const express = require('express');
const api = express.Router();
const { checkAuthentication } = require('../middleware/verify');

api.get('/sitescanner/new', checkAuthentication, (req, res) => {
    res.render('controllers/tools/sitescannerFormController', {
        user: req.user, dataObject: {}, language: { name: []}
    });
})

module.exports = api;