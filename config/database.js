let mysql = require('mysql');
require('dotenv').config();

let tempDb = mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_TEMP_DBGP,
    timezone: 'utc',
    debug: false
});
let testDb = mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_TEST_DBGP,
    timezone: 'utc',
    debug: false
});
let prodDb = mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_PROD_DBGP,
    timezone: 'utc',
    debug: false
});

tempDb.getConnection((err, connection) => {
    if (err) {
        console.log("Not connected !!! " + err);
        return;
    }
    console.log('MySql Connected as id ' + connection.threadId);
});
testDb.getConnection((err, connection) => {
    if (err) {
        return;
    }
});
prodDb.getConnection((err, connection) => {
    if (err) {
        return;
    }
});

module.exports = {
    tempDb,
    testDb,
    prodDb
};