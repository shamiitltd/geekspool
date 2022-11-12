const express = require('express');
const api = express.Router();
const { checkAuthentication } = require('../middleware/verify');
const { getDropDown } = require('../model/common');

api.get('/dropdown/:name/', checkAuthentication,async (req, res) => {
    const {
        name
    } = req.params;
    await res.send(getDropDown(name));
})

module.exports = api;