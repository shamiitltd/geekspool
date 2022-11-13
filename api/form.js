const express = require('express');
const api = express.Router();
const { checkAuthentication } = require('../middleware/verify');
const { toolsUiLoader, uploadtoolInfoData, deleteRssfromDbNFile } = require('../model/profile');

api.get('/rss/new', (req, res) => {
    const queryString = req.query;
    toolsUiLoader(req, res, 'controllers/rssController', queryString.id);
})

api.post('/generaterss', (req, res) => {
    const dataObject = req.body;
    uploadtoolInfoData(res, dataObject);
})

api.post('/deleteRssfile', checkAuthentication, async (req, res) => {
    const dataObject = req.body;
    deleteRssfromDbNFile(req, res, dataObject);
})

module.exports = api;