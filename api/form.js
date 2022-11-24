const express = require('express');
const { admin, viewer, editor } = require('../middleware/roles');
const api = express.Router();
const { checkAuthentication } = require('../middleware/verify');
const { toolsUiLoader, uploadtoolInfoData, deleteRssfromDbNFile } = require('../model/profile');

api.get('/rss/new', checkAuthentication, [admin, editor, viewer], (req, res) => {
    const queryString = req.query;
    toolsUiLoader(req, res, 'controllers/tools/rssgenController', queryString.id);
})

api.post('/generaterss', checkAuthentication,(req, res) => {
    const dataObject = req.body;
    uploadtoolInfoData(res, dataObject);
})

api.post('/deleteRssfile', checkAuthentication, async (req, res) => {
    const dataObject = req.body;
    deleteRssfromDbNFile(req, res, dataObject);
})

module.exports = api;