const schedule = require('node-schedule');
const {
    responseMsgBackup
} = require('./nodemailer');
const db = require('../config/database');

function backUpSchedular(hour = 1) {
    const backup = schedule.scheduleJob(`0 0 ${hour} * * *`, function () {
        let queryString = `CALL backupDataSmaptorss;`;
        db.mysql.query(queryString, async (err, results, fields) => {
            if (err) {
                // console.log( 'Some error, login with another method with different email', err );
                return;
            }
            // console.log( "Stored procedure Successfully run", results );
            let mailObj = {
                countUrls: results.affectedRows,
                emails: 'naresh03961999@gmail.com'
            }
            console.log(mailObj);
            responseMsgBackup(mailObj);
        });
    });
}
backUpSchedular(1);