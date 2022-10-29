let fs = require('fs');
let readline = require('readline');
let db = require('../../config/database');

let storedprocedures = readline.createInterface({
    input: fs.createReadStream('./storedprocedure.sql'),
    terminal: false
});

let tables = readline.createInterface({
    input: fs.createReadStream('./tables.sql'),
    terminal: false
});

storedprocedures.on('line', function (chunk) {
    db.mysql.query(chunk.toString('ascii'), function (err, sets, fields) {
        if (err) console.log(err);
    });
});

tables.on('line', function (chunk) {
    db.mysql.query(chunk.toString('ascii'), function (err, sets, fields) {
        if (err) console.log(err);
    });
});

storedprocedures.on('close', function () {
    console.log("finished storedprocedures");
});

tables.on('close', function () {
    console.log("finished tables");
    db.mysql.end();
});
