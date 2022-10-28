const db = require('../config/database');

exports.getUserById = async function (id) {
    let query = `SELECT * FROM userlogin WHERE id = ${id}`;
    await db.mysql.query(query, (err, details, fields) => {
        return { err, details };
    })
}

exports.getUserByEmail = async function (email) {
    let query = `SELECT * FROM userlogin WHERE email = \'${email}\'`;
    await db.mysql.query(query, (err, details, fields) => {
        return { err, details };
    })
}

exports.putNewUser = async function (userData) {
    let query = `INSERT INTO 
                 userlogin( id, name, email, password, imgurl, provider )
                 VALUES( '${userData.id}',
                         "${userData.name}",
                         "${userData.email}", 
                         "${userData.password}",
                         "${userData.imgurl}",
                         "${userData.provider}" )`;
    await db.mysql.query(query, (err, results, fields) => {
        return { err, results };
    });
}