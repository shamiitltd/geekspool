//libraries and files //npm run setup //npm run test //npm run prod
const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const path = require('path');
const compression = require('compression');
const flash = require('express-flash');
const session = require('cookie-session');
const app = express();
const api = require('./api/index');
const passport = require('passport');
require('dotenv').config();

//use mehtods
app.use(compression());
app.use(methodOverride('_method'));
app.use(express.json({
    limit: '100mb'
}));
app.use(express.urlencoded({
    limit: '100mb',
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));
app.use(cookieParser());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 730 * 86400000
    }
}))
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

//set methods
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//api path
app.use(api);  


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('shared/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('shared/error', {
        message: err.message,
        error: {}
    });
});


//listening the server
var server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${server.address().port} !!!`);
})
