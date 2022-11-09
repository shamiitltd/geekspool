const schedule = require('node-schedule');
const {
    responseMsgBackup
} = require('./nodemailer');
const {
    toolsoc2
} = require('../database/mysqlDB');

function backUpSchedular(hour = 1) {
    const backup = schedule.scheduleJob(`0 0 ${hour} * * *`, function () {
        let usersQueryString = `CALL backupDataSmaptorss;`;
        toolsoc2.query(usersQueryString, async (err, results, fields) => {
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