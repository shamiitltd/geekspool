const passport = require('passport');

exports.callbackAuthenticator =  function (provider, req, res, next) {
    passport.authenticate(provider, function (err, user, info) {
        if (err) {
            req.flash('info', info.message);
            return res.redirect('/signin');
        }
        if (!user) {
            req.flash('info', info.message);
            return res.redirect('/signin');
        }
        req.logIn(user, function (err) {
            if (err) {
                req.flash('info', 'Authentication error');
                return res.redirect('/signin');
            }
            let strurl = req.cookies['PRURL'];
            if (strurl) {
                res.clearCookie('PRURL');
                return res.redirect(strurl);
            } else {
                return res.redirect('/');
            }
        });
    })(req, res, next);
}


