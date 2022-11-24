const passport = require('passport');
const { mysql } = require('../config/database');
const { sendEmail } = require('../config/mail');
require('dotenv').config();


function callbackAuthenticator(provider, req, res, next) {
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


function registerUserFunction(dataObject, res) {
    let queryString = `CALL Upload_User_Details('${dataObject.id}', '${dataObject.name}', '${dataObject.email}', '${dataObject.password}','', '${process.env.PROVIDER}', false);`;
    mysql.query(queryString, (err, results, fields) => {
        if (err) {
            //console.log( "Not connected !!! " + err );
            return res.send('User already exists with this email');
        }

        //console.log( 'The Inserted in table is: \n', results, fields );
        return res.send('success');
    });
}
function resetNewPasswordFunction(dataObject, res) {
    // console.log( dataObject );
    let queryString = `CALL Get_userInfoByEmail('${dataObject.email}');`;
    mysql.query(queryString, (err, results, fields) => {
        if (err) {
            return res.send('Some error, login with another method with different email');
        }
        results = results[0];
        if (!results || !results[0]) {
            return res.send('No user with this email');
        } else if (results[0].provider !== process.env.PROVIDER) {
            return res.send(`Already exists with ${results[0].provider} Sign In method`);
        } else if (results[0].password !== dataObject.token) {
            return res.send('Password already updated with this link or outdated link');
        }
        queryString = `CALL Upload_Reset_Password('${dataObject.email}','${dataObject.password}', '${process.env.PROVIDER}');`;
        mysql.query(queryString, (err, results2, fields) => {
            if (err) {
                return res.send('Some error, Please sign in with another method'+err);
            }
            return res.send('success');
        });
    });
}

function sendresetpassmail(email, res) {
    let queryString = `CALL Get_userInfoByEmail('${email}');`;
    mysql.query(queryString, (err, results, fields) => {
        if (err) {
            return res.send('Some error, login with another method with different email');
        }
        results = results[0];
        if (!results || !results[0]) {
            return res.send('No user with this email');
        } else if (results[0].provider !== process.env.PROVIDER) {
            return res.send(`Already exists with ${results[0].provider} Sign In method`);
        }
        let token = results[0].password;
        let messgeText = `Hello ${results[0].name},
                          
                          Follow this link to reset your ${process.env.PROVIDER} password for your ${email} account.
                          
                          ${process.env.HOST_URL}/auth/resetpass?email=${email}&token=${token}
                          
                          If you didn’t ask to reset your password, you can ignore this email.
                          
                          Thanks,
                          
                          Your ${process.env.PROVIDER} team`;
        let messageHtml = `<p><strong>Hello ${results[0].name},</strong></p>
                          
                          <p>Follow this link to reset your ${process.env.PROVIDER} password for your ${email} account.</p>
                          
                          <p><a href="${process.env.HOST_URL}/auth/resetpass?email=${email}&token=${token}">${process.env.HOST_URL}/auth/resetpass?email=${email}&token=${token}</a></p>
                          
                          <p>If you didn&rsquo;t ask to reset your password, you can ignore this email.</p>
                          
                          <p><strong>Thanks,</strong></p>
                          
                          <p><strong>Your ${process.env.PROVIDER} team</strong></p>`;
        let subjectMsg = `Reset your password for ${process.env.PROVIDER}`;
        sendEmail(process.env.PROVIDER, process.env.EMAIL_NOREPLY_EMAIL, process.env.EMAIL_NOREPLY_PASS, results[0].email, subjectMsg, messgeText, messageHtml, res);
    });
}

function resetPassWithEmail(fileLocation, email, token, res) {
    let queryString = `CALL Get_userInfoByEmail('${email}');`;
    mysql.query(queryString, (err, results, fields) => {
        if (err) {
            return res.render(fileLocation, {
                user: {},
                email,
                token,
                message: 'Some error, Please login with another method with different email'
            });
        }
        results = results[0];
        if (!results || !results[0]) {
            return res.render(fileLocation, {
                user: {},
                email,
                token,
                message: 'No user with this email'
            });
        }
        if (token == results[0].password) {
            return res.render(fileLocation, {
                user: {},
                email,
                token,
                message: ''
            });
        } else {
            return res.render(fileLocation, {
                user: {},
                email,
                token,
                message: 'Password already updated with this link or outdated link'
            });
        }
    });
}

module.exports = {
    callbackAuthenticator,
    registerUserFunction,
    resetPassWithEmail,
    resetNewPasswordFunction,
    sendresetpassmail
}

