const { mysql } = require("../config/database");
const { sendEmail } = require("../config/mail");
require('dotenv').config();


function responseMsgRss(mailObj) {
    let sqlQueryString = `UPDATE ${mailObj.tableName} 
                        SET rsslength = ${mailObj.rsslength}  
                        WHERE rssid='${mailObj.rssid}'
                        `;
    mysql.query(sqlQueryString, async (cerr, cresults, cfields) => {
        if (cerr) {
            // console.log( "Not connected !!! " + cerr );
            return;
        }
        // console.log( 'The Inserted in table is: \n', cresults, cfields );
    });

    let messgeText = `Hello User,

                            Your Updated RSS Feed contains ${mailObj.countUrls} Urls, From: ${mailObj.urls}, Follow this link to check your Offcampuscareer Rss Feed created by your https://offcampuscareer.com/profile/${mailObj.userid} account.
                                        
                            https://offcampuscareer.com${mailObj.path + mailObj.rssid}.xml
                                        
                            If you didn’t ask to generate your Rss Feed, Then you can inform our team at help@offcampuscareer.com or offcampuscareer@gmail.com.
                                        
                            Thanks,
                                        
                            Your Offcampuscareer team`;
    let messageHtml = `<p><strong>Hello User,</strong></p>
                                        
                            <p>Your Updated RSS Feed contains <strong>${mailObj.countUrls} Urls</strong>, <strong>From: ${mailObj.urls}</strong>, Follow this link to check your Offcampuscareer Rss Feed created by your <a href="https://offcampuscareer.com/profile/${mailObj.userid}">https://offcampuscareer.com/profile/${mailObj.userid}</a> account.</p>
                                        
                            <p><a href="https://offcampuscareer.com${mailObj.path + mailObj.rssid}.xml">https://offcampuscareer.com${mailObj.path + mailObj.rssid}.xml</a></p>
                                        
                            <p>If you didn&rsquo;t ask to generate your Rss Feed, Then you can inform our team at help@offcampuscareer.com or offcampuscareer@gmail.com.</p>
                                        
                            <p><strong>Thanks,</strong></p>
                                        
                            <p><strong>Your Offcampuscareer team</strong></p>
                            `;
    let subjectMsg = `[Info]: Your Rss Feed is Updated`;
    if (mailObj.emails) {
        //sendEmail(senderName, senderEmail, senderPass, receiverEmail, msgSubject, msgText, msgHtml, res = '')
        sendEmail(process.env.RSS_SENDER_NAME, process.env.RSS_SENDER_EMAIL, process.env.RSS_SENDER_PASS, mailObj.emails, subjectMsg, messgeText, messageHtml);
    }
}

function responseMsgBackup(mailObj) {
    let messgeText = `Hello Admin,

                            Your Updated Backup DB contains ${mailObj.countUrls} records,
                                        
                            If you didn’t ask to generate your Rss Feed, Then you can inform our team at help@offcampuscareer.com or offcampuscareer@gmail.com.
                                        
                            Thanks,
                                        
                            Your Offcampuscareer team`;
    let messageHtml = `<p><strong>Hello Admin,</strong></p>
                                        
                            <p>Your Updated Backup DB contains <strong>${mailObj.countUrls} records</strong>, 

                            <p>If you didn&rsquo;t ask to generate your Rss Feed, Then you can inform our team at help@offcampuscareer.com or offcampuscareer@gmail.com.</p>
                                        
                            <p><strong>Thanks,</strong></p>
                                        
                            <p><strong>Your Offcampuscareer team</strong></p>
                            `;
    let subjectMsg = `[Info]: Your Today's Database Backup is Done`;
    if (mailObj.emails) {
        sendEmail(process.env.BACKUP_SENDER_NAME, process.env.BACKUP_SENDER_EMAIL, process.env.BACKUP_SENDER_PASS, mailObj.emails, subjectMsg, messgeText, messageHtml);
    }
}


module.exports = {
    responseMsgRss,
    responseMsgBackup
}