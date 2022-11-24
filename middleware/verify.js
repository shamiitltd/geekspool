
exports.checkAuthentication = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    let strurl = req.url
    res.cookie('PRURL', strurl);
    return res.redirect('/signin');
}

exports.checkNotAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    return next();
}
