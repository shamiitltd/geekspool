const passport = require('passport');
const {
    initializePassport
} = require('./routes/libraries/passportFunctions');
const {
    checkAuthentication,
    checkNotAuthenticated
} = require('./routes/libraries/normal_functions');
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());


// app.use('/variablesData', variablesData); // Routing path
app.use('/', getRoutes); // Routing path 
app.use('/', getRoutestools); // Routing path 
app.use('/', getRoutesBox); // Routing path 
app.use('/', postRoutes); // Routing path
app.use('/', postRoutestools); // Routing path

app.get('/signin', checkNotAuthenticated, async (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: ''
    });
})
app.get('/offline', async (req, res) => {
    res.render('outerMostContainers/containerWithOffline', {
        user: req.user
    });
})

app.get('/help', (req, res) => {
    res.render('landing/help');
})


//set Different routes
app.get('/', async (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

app.get('/jobs', async (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

app.get('/internships', async (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})
app.get('/referral', (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

app.get('/scholarships', (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})
app.get('/forwomen', (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})


app.get('/recruiters', (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

app.get('/courses', async (req, res) => {
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

app.get('/courses/search', async (req, res) => {
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
app.get('/viewcourses', async (req, res) => {
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

app.get('/*/new', checkAuthentication, (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})
app.get('/profile/*', checkAuthentication, (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

app.get('/*/edit', checkAuthentication, (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})
app.get('/deleteInfo', checkAuthentication, (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})

app.get('/*', (req, res) => {
    res.render('outerMostContainers/containerWithSearchForm', {
        user: req.user
    });
})
