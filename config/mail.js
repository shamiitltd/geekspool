const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendEmail = async function (senderName, senderEmail, senderPass, receiverEmail, msgSubject, msgText, msgHtml, res='' ) {
    let transporter = nodemailer.createTransport({
        host: process.env.HOST_IP,
        port: 465, // 587 or 25 or 2525
        secure: true, // true for 465, false for other ports
        transportMethod: 'SMTP',
        auth: {
            user: senderEmail,
            pass: senderPass,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mail = {
        from: `"${senderName}" <${senderEmail}>`, // sender address
        to: `${receiverEmail}`, // list of receivers
        subject: `${msgSubject}`, // Subject line
        text: msgText, // plain text body
        html: msgHtml, // html body
    };
    transporter.sendMail(mail, function (err, info) {
        if (err) {
            if(res)
                return res.send('Failed to send mail, Please login with different method');
            else console.log('Failed to send mail, Please login with different method');
        } else {
            if (res)
                return res.send('success');
            /*else console.log('success');*/
        }
    });
}
