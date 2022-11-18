const express = require('express');
const api = express.Router();
const { checkAuthentication } = require('../middleware/verify');
const { uploadtoolInfoData, deleteRssfromDbNFile } = require('../model/profile');

api.post('/postsitemaptorss', checkAuthentication, async (req, res) => {
    let dataObject = req.body;
    uploadtoolInfoData(res, dataObject);
})

api.post('/deleteRssfile', checkAuthentication, async (req, res) => {
    let dataObject = req.body;
    deleteRssfromDbNFile(req, res, dataObject);
})

module.exports = api;