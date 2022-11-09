const fs = require("fs");
const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
let db = require('../config/database');
const common = require('./common');

//exports.profile = async function (req, res) {

//    res.render('controllers/profileController', {
//        user: req.user, dataObject, paginator
//    });
//}
const {
    language,
} = require('../data/staticData');

const {
    finalRssGeneration
} = require('./sitemapscanner');

async function profileUi(req, res, tableName, fileLocation, id ) {
    const queryVals = req.query;
    let pageNumber = parseInt(queryVals.page ? queryVals.page : 1);
    let lim = parseInt(queryVals.limit ? queryVals.limit : 15);
    let searchAll = queryVals.searchAll ? queryVals.searchAll : '';
    if (!id) {
        return res.redirect('/nopage');
    } else {
        let totalRecords;
        if (searchAll) {
            totalRecords = `SELECT  count(*) as totalposts FROM  
                            ${tableName} WHERE (MATCH( rssid, userid, emails, urls, included, excluded, remarks ) 
                            AGAINST( '${searchAll}' IN NATURAL LANGUAGE MODE ) or urls LIKE '%${searchAll}%' or emails LIKE '%${searchAll}%') and (userid=${req.user.id} or ${req.admin} IS TRUE)`;
        } else {
            totalRecords = `SELECT count(*) as totalposts FROM  
                        ${tableName} WHERE  userid=${req.user.id} or ${req.admin} IS TRUE`;
        }

        db.mysql.query(totalRecords, async (perr, postResult, fields) => {
            if (perr) {
                return res.send("Please check your internet connection 1" + perr);
            }
            // console.log( 'Getting data from table is: \n', postResult[ 0 ] );
            if (!postResult.length)
                return res.redirect('/nopage');
            let totalposts = postResult[0].totalposts;
            let totalPages = Math.ceil(totalposts / lim);
            pageNumber = Math.min(pageNumber, totalPages);
            pageNumber = Math.max(pageNumber, 1);
            let sqlQueryString;
            if (searchAll) {
                sqlQueryString = `SELECT * FROM  
                            ${tableName} WHERE (MATCH( rssid, userid, emails, urls, included, excluded, remarks ) 
                            AGAINST( '${searchAll}' IN NATURAL LANGUAGE MODE ) or urls LIKE '%${searchAll}%' or emails LIKE '%${searchAll}%') and (userid=${req.user.id} or ${req.admin} IS TRUE) 
                            ORDER BY updated ASC 
                            LIMIT ${lim}  OFFSET ${lim * (pageNumber - 1)}`;
            } else {
                sqlQueryString = `SELECT * FROM  
                        ${tableName} WHERE userid=${req.user.id} or ${req.admin} IS TRUE 
                        ORDER BY updated ASC 
                        LIMIT ${lim}  OFFSET ${lim * (pageNumber - 1)}`;
            }

            db.mysql.query(sqlQueryString, async (err, results, postfields) => {
                if (err) {
                    return res.send("Please check your internet connection 2" + err);
                }
                let companiesData = {
                    hasPrevPage: (pageNumber - 1 > 0 ? true : false),
                    hasNextPage: (pageNumber + 1 <= totalPages ? true : false),
                    prevPage: (pageNumber - 1 > 0 ? pageNumber - 1 : 0),
                    nextPage: (pageNumber + 1 <= totalPages ? pageNumber + 1 : 0),
                    totalPages: totalPages,
                    page: pageNumber,
                    postperpage: lim,
                };
                // console.log( companiesData );
                dataObject = {
                    admin: req.admin ? "admin" : "",
                    uid: req.user.id,
                    username: req.user.name,
                    imgurl: req.user.imgurl,
                    searchAll: searchAll,
                    totalposts: totalposts,
                };
                let table = [];
                for (let i = 0; i < results.length; i++) {
                    let diffMs = results[i].updated - new Date();
                    let diffDays = Math.floor(diffMs / 86400000);
                    let diffHrs = Math.floor((diffMs % 86400000) / 3600000);
                    let diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000);
                    // console.log( diffDays, diffHrs, diffMins );
                    diffDays = diffDays > 0 ? diffDays : 0;
                    diffHrs = diffHrs > 0 ? diffHrs : 0;
                    diffMins = diffMins > 0 ? diffMins : 0;
                    table.push({
                        rssid: results[i].rssid,
                        emails: results[i].emails.split(',').join(", "),
                        urls: common.stringToArray(results[i].urls),
                        included: results[i].included.split(',').join(", "),
                        excluded: results[i].excluded.split(',').join(", "),
                        remarks: results[i].remarks.split(',').join(", "),
                        language: results[i].language,
                        frequency: results[i].frequency,
                        rsslength: results[i].rsslength,
                        ndtype: results[i].ndtype,
                        path: results[i].directorypath,
                        nextUpdate: `${diffDays} Days : ${diffHrs} Hour : ${diffMins} Minutes`,
                    });
                }
                dataObject.table = table;
                return res.render(fileLocation, {
                    languages: language,
                    dataObject,
                    companiesData
                });

            });
        });
    }
}

async function toolsUiLoader(tableName, fileLocation, id, req, res) {
    if (req.admin || req.editor) {
        if (!id) {
            return res.render(fileLocation, {
                language,
                dataObject: {
                    uid: req.user.id,
                    username: req.user.name
                }
            });
        } else {
            let sqlQueryString = `SELECT * FROM  
                        ${tableName} WHERE rssid='${id}' AND (userid=${req.user.id} or ${req.admin} IS TRUE)`;
            db.mysql.query(sqlQueryString, (err, results, fields) => {
                if (err) {
                    return res.send("Please check your internet connection" + err);
                }
                // console.log( 'Getting data from table is: \n', results[ 0 ] );
                if (!results.length)
                    return res.render(fileLocation, {
                        language,
                        dataObject: {
                            uid: req.user.id,
                            username: req.user.name
                        }
                    }); //common.stringToArray
                dataObject = {
                    rssid: results[0].rssid,
                    uid: results[0].userid,
                    emails: common.stringToArray(results[0].emails),
                    urls: common.stringToArray(results[0].urls),
                    included: common.stringToArray(results[0].included),
                    excluded: common.stringToArray(results[0].excluded),
                    remarks: common.stringToArray(results[0].remarks),
                    directorypath: results[0].directorypath,
                    username: req.user.name,
                    language: results[0].language,
                    frequency: results[0].frequency,
                    ndtype: results[0].ndtype
                };
                return res.render(fileLocation, {
                    language,
                    dataObject
                });
            });
        }
    } else {
        res.redirect('/nopage');
    }
}

async function uploadtoolInfoData(tableName, dataObject, res) {
    dataObject = await common.arrayToStringObjectTool(dataObject);
    let sqlQueryString;
    if (dataObject.rssid) {
        sqlQueryString = `UPDATE ${tableName} 
                        SET userid='${dataObject.userid}',
                        emails = '${dataObject.emails ? dataObject.emails : ''}',
                        urls = '${dataObject.urls ? dataObject.urls : ''}',
                        included = '${dataObject.included ? dataObject.included : ''}',
                        excluded = '${dataObject.excluded ? dataObject.excluded : ''}',
                        remarks = '${dataObject.remarks ? dataObject.remarks : ''}',
                        language='${dataObject.language}',
                        frequency = '${dataObject.frequency ? dataObject.frequency : 0}',
                        ndtype='${dataObject.ndtype}',
                        updated = DATE_ADD( CURRENT_TIMESTAMP(), INTERVAL ${dataObject.frequency != '0' ? 1400 / dataObject.frequency : 5256000} MINUTE )
                        WHERE rssid='${dataObject.rssid}'
                        `;
    } else {
        let rssid = shortid.generate();
        const d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        dataObject.rssid = rssid;
        dataObject.directorypath = `/feeds/${year}/${month}/`;
        sqlQueryString = `INSERT INTO 
                        ${tableName}( rssid, userid, emails, urls, included, excluded, remarks, directorypath, language, frequency, ndtype)
                        VALUES( '${dataObject.rssid}', '${dataObject.userid}', '${dataObject.emails ? dataObject.emails : ''}', '${dataObject.urls ? dataObject.urls : ''}', '${dataObject.included ? dataObject.included : ''}', '${dataObject.excluded ? dataObject.excluded : ''}', '${dataObject.remarks ? dataObject.remarks : ''}', '${dataObject.directorypath}', '${dataObject.language}', '${dataObject.frequency}', '${dataObject.ndtype}' )
                        `;
    }
    db.mysql.query(sqlQueryString, async (cerr, cresults, cfields) => {
        if (cerr) {
            // console.log( "Not connected !!! " + err );
            return res.send('Course not upload !!!' + cerr);
        }
        // console.log( 'The Inserted in table is: \n', cresults, cfields );
        let mailObj = {
            emails: dataObject.emails ? dataObject.emails : '',
            rssid: dataObject.rssid,
            userid: dataObject.userid,
            path: dataObject.directorypath,
            urls: dataObject.urls ? dataObject.urls.split(',').join(", ") : ''
        }
        await finalRssGeneration(dataObject.rssid, dataObject.language, common.stringToArray(dataObject.urls), common.stringToArray(dataObject.included), common.stringToArray(dataObject.excluded), mailObj);
        let path = await dataObject.directorypath + dataObject.rssid + '.xml';
        return await res.redirect(path);
    });
}

async function deleteRssfromDbNFile(tableName, dataObject, req, res) {
    let sqlQueryString = `SELECT * FROM  
                        ${tableName} WHERE rssid='${dataObject.rssid}' AND (userid=${req.user.id} or ${req.admin} IS TRUE)`;
    db.mysql.query(sqlQueryString, (err, results, fields) => {
        if (err) {
            return res.send("Please check your internet connection" + err);
        }
        if (!results.length)
            return res.send("Record not in Database"); //common.stringToArray

        sqlQueryString = `DELETE FROM ${tableName} 
                        WHERE rssid='${results[0].rssid}'
                        `;
        db.mysql.query(sqlQueryString, async (cerr, cresults, cfields) => {
            if (cerr) {
                return res.send("Not connected !!! " + cerr);
            }
            const filePath = 'public' + results[0].directorypath + results[0].rssid + '.xml';
            fs.unlink(filePath, (err) => {
                if (err && err.code == "ENOENT") {
                    return res.send("Record deleted from DB but Error! File doesn't exist.");
                } else if (err) {
                    return res.send("Record deleted from DB but Not from File Location.");
                } else {
                    return res.send(`Successfully removed file`);
                }
            });
        });
    });
}

module.exports = {
    toolsUiLoader,
    uploadtoolInfoData,
    profileUi,
    deleteRssfromDbNFile
};