let fs = require('fs');
const { mysql } = require('../../config/database');
const { stringToArray } = require('../../model/common');

/* Use --# to seperate two different mysql query, otherwise it will show you the error */
async function runSqlFile(path) {
    /*const path = require('path');
     *path.join(__dirname, './storedprocedure.sql') 
     * */
    const fileData = fs.readFileSync(path).toString();
    const arr = await stringToArray(fileData, '#');
    if (arr)
        await arr.forEach((sqlquery) => {
            mysql.query(sqlquery, async function (err, rows) {
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
    await runSqlFile('./setup/Databases/createtables.sql');
    await runSqlFile('./setup/Databases/createstoredprocedure.sql');
}

exports.insertData = async function () {
    await runSqlFile('./setup/Databases/insertdata.sql');
}
exports.insertnewData = async function () {
    await runSqlFile('./setup/Databases/insertnewdata.sql');
}

exports.updateData = async function () {
    await runSqlFile('./setup/Databases/updatedata.sql');
}

exports.runSqlFile = runSqlFile;