const express = require('express');
const api = express.Router();

const verify = require('../middleware/verify');


api.get('/signin', verify.checkNotAuthenticated, async (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: ''
    });
})
api.get('/offline', async (req, res) => {
    res.render('outerMostContainers/containerWithOffline', {
        user: req.user
    });
})

api.get('/help', (req, res) => {
    res.render('landing/help');
})


//set Different routes
api.get('/', async (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})



api.get('/recruiters', (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

api.get('/courses', async (req, res) => {
    let {
        searchAll
    } = req.query;
    if (searchAll) {
        res.cookie('QRY', searchAll);
    }
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

api.get('/courses/search', async (req, res) => {
    let {
        searchAll
    } = req.query;
    if (searchAll) {
        res.cookie('QRY', searchAll);
    }
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})
api.get('/viewcourses', async (req, res) => {
    let {
        searchAll
    } = req.query;
    if (searchAll) {
        res.cookie('QRY', searchAll);
    }
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})


app.get('/courses/organisation/:companyName/:jobtitle', async (req, res) => { ///courses/organisation/google/software-engineer-1
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

app.get('/*/new', verify.checkAuthentication, (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})
app.get('/profile/*', verify.checkAuthentication, (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

app.get('/*/edit', verify.checkAuthentication, (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})
app.get('/deleteInfo', verify.checkAuthentication, (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

app.get('/*', (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})
