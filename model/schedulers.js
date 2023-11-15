const schedule = require('node-schedule');
const { mysql } = require('../config/database');
const { sendEmail } = require('../config/mail');
const { finalRssGeneration } = require('./rssgenerator');

function backUpSchedular(hour = 1) {
    const backup = schedule.scheduleJob(`0 0 ${hour} * * *`, function () {
        let queryString = `CALL backupDataSmaptorss;`;
        mysql.query(queryString, async (err, results, fields) => {
            if (err) {
                // console.log( 'Some error, login with another method with different email', err );
                return;
            }
            // console.log( "Stored procedure Successfully run", results );
            let mailObj = {
                senderName,
                senderEmail,
                senderPass,
                receiverEmail,
                msgSubject,
                msgText,
                msgHtml,
                res:'',
            }
            sendEmail(mailObj.senderName, mailObj.senderEmail, mailObj.senderPass, mailObj.receiverEmail, mailObj.msgSubject, mailObj.msgText, mailObj.msgHtml, mailObj.res);
        });
    });
}
backUpSchedular(1);
function jobSchedular(min = 60) {
    try {
        const job = schedule.scheduleJob(`*/${min} * * * *`, function () {
            updateRssTable();
        });
    } catch (err) { }
}
function updateRssTable() {
    try {
        let queryStr = `CALL Get_Rss_recordsto_update();`;
        mysql.query(queryStr, async (err, results, fields) => {
            if (err) {
                // console.log( 'Some error, login with another method with different email', err );
                return;
            }
            results = results[0];
            if (!results || !results[0]) {
                // console.log( 'No record ready to update' );
                return;
            }
            for (let i = 0; i < results.length; i++) {
                let mailObj = {
                    emails: results[i].emails ? results[i].emails : '',
                    rssid: results[i].rssid,
                    userid: results[i].userid,
                    frequency: results[i].frequency,
                    path: results[i].directorypath,
                    urls: results[i].urls ? results[i].urls.split(',').join(", ") : ''
                }
                if (results[i].frequency != '0')
                    await finalRssGeneration(results[i].rssid, results[i].language, await stringToArray(results[i].urls), await stringToArray(results[i].included), await stringToArray(results[i].excluded), mailObj);
            }
        });
    } catch (err) { }
}
jobSchedular(15);
