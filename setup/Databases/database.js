let fs = require('fs');
let db = require('../../config/database');
const { stringToArray } = require('../../model/common');

/* Use --# to seperate two different mysql query, otherwise it will show you the error */
async function runSqlFile(path) {
    /*const path = require('path');
     *path.join(__dirname, './storedprocedure.sql') 
     * */
    const fileData = fs.readFileSync(path).toString();
    const arr = stringToArray(fileData, '#');
    await arr.forEach((sqlquery) => {
        db.mysql.query(sqlquery, async function (err, rows) {
            if (!err) {
                console.log(rows);
                return await true;
            } else {
                console.log(err);
                return await false;
            }
        });
    });
}

/* Use --# to seperate two different mysql query, otherwise it will show you the error */

exports.deleteTablesAndSP = async function () {
    await runSqlFile('./setup/Databases/deleteall.sql');
}

exports.clearDB = async function () {
    await runSqlFile('./setup/Databases/clearall.sql');
}

exports.createTablesAndSp = async function () {
    await runSqlFile('./setup/Databases/tables.sql');
    await runSqlFile('./setup/Databases/storedprocedure.sql');
}

exports.loadTables = async function () {
    await runSqlFile('./setup/Databases/data.sql');
}

exports.runSqlFile = runSqlFile;