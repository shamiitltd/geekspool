const express = require('express');
const api = express.Router();

const use = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

//don't create api for user creation may lead to data leak/buffer overflow on server
api.post('api/user', )


