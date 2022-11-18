const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { isObjEmpty } = require('../model/common');
require('dotenv').config();
const bcrypt = require('bcrypt');

const { mysql } = require('../config/database');

function initializePassport(passport) {
    const authenticateUser = async (email, password, done) => {
        let queryString = `CALL Get_userInfoByEmail('${email}');`;
        await mysql.query(queryString, async (err, details, fields) => {
            if (err) {
                return done(null, false, {
                    message: 'Server error, try another login method'
                });
            }
            details = details[0];//because stored procedure returns as array
            let user = {
                ...details[0]
            };
            
            if (isObjEmpty(user)) {
                return done(null, false, {
                    message: 'No user with that email'
                });
            }
            try {
                if (user.provider === process.env.PROVIDER) {
                    if (await bcrypt.compare(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false, {
                            message: 'Password Incorrect'
                        })
                    }
                } else {
                    return done(null, false, {
                        message: `Already exists with ${user.provider} Login method`
                    })
                }
            } catch (e) {
                return done(null, false, {
                    message: 'Some error, try another login method'
                });
            }
        })
    }

    passport.use(new LocalStrategy({
        usernameField: 'email'
    }, authenticateUser));

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.HOST_URL}/auth/google/callback`
    }, updateUserInfo));

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: `${process.env.HOST_URL}/auth/facebook/callback`,
        profileFields: ['id', 'displayName', 'photos', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified'],
    }, updateUserInfo));

    passport.use(new LinkedInStrategy({
        clientID: process.env.LINKEDIN_KEY,
        clientSecret: process.env.LINKEDIN_SECRET,
        callbackURL: `${process.env.HOST_URL}/auth/linkedin/callback`,
        scope: ['r_emailaddress', 'r_liteprofile'],
    }, updateUserInfo));

    passport.serializeUser(function (user, done) {
        return done(null, user.id);
    }); 

    passport.deserializeUser(async function (id, done) {
        let queryString = `CALL Get_userInfoById('${id}');`;
        await mysql.query(queryString, (err, details, fields) => {
            if (err) {
                return done(null, false, {
                    message: 'Some error, try another login method'
                });
            }
            details = details[0];//because stored procedure returns as array
            if (!details || !details.length)
                return done(null, false, {
                    message: 'No user with that email'
                });
            return done(null, {
                ...details[0]
            });
        })
    });

}

async function updateUserInfo(accessToken, refreshToken, profile, done) {
    let email = '';
    if (profile.emails && profile.emails[0].value) {
        email = profile.emails[0].value;
    } else {
        email = `${profile.id}@${process.env.DOMAIN}`;
    }
    let queryString = `CALL Get_userInfoByEmail('${email}');`;
    await mysql.query(queryString, async (err, details, fields) => {
        if (err) {
            return done(null, false, {
                message: 'Some query error, try another login method'
            });
        }
        details = details[0];//because stored procedure returns as array
        if (!details || !details.length) {
            let userData = {
                password: accessToken
            };
            userData.email = email;
            userData.name = profile.displayName;
            userData.id = profile.id;
            userData.provider = profile.provider;
            userData.imgurl = profile.photos ? profile.photos[0].value : '/images/logo.jpeg'
            let queryString = `CALL Upload_User_Details( '${userData.id}',
                                                         "${userData.name}",
                                                         "${userData.email}", 
                                                         "${userData.password}",
                                                         "${userData.imgurl}",
                                                         "${userData.provider}", false);`;
            await mysql.query(queryString, (err, results, fields) => {
                if (err) {
                    // console.log( "Not connected !!! " + err );
                    return done(null, false, {
                        message: `Some insertion error, try another login method`
                    });
                }
                // console.log( 'The Inserted in table is: \n', results, fields );
                return done(null, userData);
            });

        } else {
            let userData = {
                ...details[0]
            }
            if (userData.provider == profile.provider)
                return done(null, userData);
            else {
                return done(null, false, {
                    message: `Already exists with ${userData.provider} login method`
                })
            }
        }
    })
}

module.exports = {
    initializePassport
}