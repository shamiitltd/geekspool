'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('shared/index', { title: 'Express' });
});
function testing() {
    console.log("Hello");
    return '5';
}
module.exports = {
    router,
    testing
}