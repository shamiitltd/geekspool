const express = require('express');
const api = express.Router();
const { checkAuthentication } = require('../middleware/verify');
const { getDropDown } = require('../model/common');

api.get('/dropdown/:name/', async (req, res) => {
    const {
        name
    } = req.params;
    res.send(await getDropDown(name));
})

module.exports = api;