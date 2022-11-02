let mysql = require('mysql');
require('dotenv').config();

let testDb = mysql.createPool({
    connectionLimit: process.env.MAX_CONNECTION_MYSQL,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER_TEST_DBGP,
    password: process.env.MYSQL_PASSWORD_TEST_DBGP,
    database: process.env.MYSQL_DATABASE_TEST_DBGP,
    timezone: 'utc',
    debug: false
});
let prodDb = mysql.createPool({
    connectionLimit: process.env.MAX_CONNECTION_MYSQL,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER_PROD_DBGP,
    password: process.env.MYSQL_PASSWORD_PROD_DBGP,
    database: process.env.MYSQL_DATABASE_PROD_DBGP,
    timezone: 'utc',
    debug: false
});

testDb.getConnection((err, connection) => {
    if (err) {
        console.log("Not connected !!! " + err);
        return;
    }
    console.log('MySql Connected as id ' + connection.threadId);
});
prodDb.getConnection((err, connection) => {
    if (err) {
        return;
    }
});

exports.mysql = process.env.NODE_ENV == 'prod' ? prodDb : testDb;