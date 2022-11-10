let fs = require('fs');
let readline = require('readline');
let db = require('../../config/database');
const path = require('path');

let storedprocedures = readline.createInterface({
    input: fs.createReadStream('./setup/Databases/storedprocedure.sql'),
    terminal: false
});

let tables = readline.createInterface({
    input: fs.createReadStream('./setup/Databases/tables.sql'),
    terminal: false
});

//let path = './setup/Databases/tables.sql';storedprocedure
const users = fs.readFileSync(path.join(__dirname, './tables.sql')).toString();
db.mysql.query(users, function (err, rows) {
    if (!err) {
        console.log(rows);
    } else {
        console.log(err);
    }
});
//storedprocedures.on('line', function (chunk) {
//    db.mysql.query(chunk.toString('ascii'), function (err, sets, fields) {
//        if (err) console.log(err);

//        storedprocedures.on('close', function () {
//            console.log("finished storedprocedures");
//        });
//    });
//});

//tables.on('line', function (chunk) {
//    db.mysql.query(chunk.toString('ascii'), function (err, sets, fields) {
//        if (err) console.log(err);

//        tables.on('close', function () {
//            console.log("finished tables");
//            db.mysql.end();
//        });

//    });
//});


module.exports = {
    storedprocedures,
    tables
}