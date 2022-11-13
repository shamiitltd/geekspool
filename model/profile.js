const fs = require("fs");
const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
const { mysql } = require('../config/database');
const { stringToArray, arrayToStringObjectTool, getDropDown } = require('./common');
const { finalRssGeneration } = require("./rssgenerator");

let language;
(async function () {
    language = await getDropDown('language');
    language = {
        name: await stringToArray(language.key, ';'),
        code: await stringToArray(language.value, ';')
    };
})();


async function profileUi(req, res, fileLocation, id) {
    req.user = {};
    req.user.id = id;

    const queryVals = req.query;
    let pageNumber = parseInt(queryVals.page ? queryVals.page : 1);
    let lim = parseInt(queryVals.limit ? queryVals.limit : 15);
    let searchAll = queryVals.searchAll ? queryVals.searchAll : '';
    if (!id) {
        return res.redirect('/nopage');
    } else {
        let totalposts;
        let queryString = `CALL Get_RssRecord_Profile('${searchAll}', '${req.user.id}', ${lim}, ${pageNumber});`;
        mysql.query(queryString, async (err, results, fields) => {
            if (err) {
                return res.send("Please check your internet connection " + err);
            }
            if (!results.length)
                return res.redirect('/nopage');
            totalposts = results[0][0].totalposts;
            let totalPages = Math.ceil(totalposts / lim);
            pageNumber = Math.min(pageNumber, totalPages);
            pageNumber = Math.max(pageNumber, 1);
            //console.log('Getting data from table is: \n', totalposts, results);
            let paginator = {
                hasPrevPage: (pageNumber - 1 > 0 ? true : false),
                hasNextPage: (pageNumber + 1 <= totalPages ? true : false),
                prevPage: (pageNumber - 1 > 0 ? pageNumber - 1 : 0),
                nextPage: (pageNumber + 1 <= totalPages ? pageNumber + 1 : 0),
                totalPages: totalPages,
                page: pageNumber,
                postperpage: lim,
            };
            dataObject = {
                admin: req.admin ? "admin" : "",
                uid: req.user.id,
                username: req.user.name,
                imgurl: req.user.imgurl,
                searchAll: searchAll,
                totalposts: totalposts,
            };
            let table = [];
            try {
                results = results[1];
                for (let i = 0; i < results.length; i++) {
                    let diffMs = results[i].updated - new Date();
                    let diffDays = Math.floor(diffMs / 86400000);
                    let diffHrs = Math.floor((diffMs % 86400000) / 3600000);
                    let diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000);
                    diffDays = diffDays > 0 ? diffDays : 0;
                    diffHrs = diffHrs > 0 ? diffHrs : 0;
                    diffMins = diffMins > 0 ? diffMins : 0;
                    table.push({
                        rssid: results[i].rssid,
                        emails: results[i].emails.split(',').join(", "),
                        urls: await stringToArray(results[i].urls),
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
            } catch (err) { }
            dataObject.table = table;
            return res.render(fileLocation, {
                user: req.user,
                languages: language,
                dataObject,
                paginator
            });

        });
    }
}

async function toolsUiLoader(req, res, fileLocation, id) {
    req.user = {};
    req.user.id = id;

    if (req.admin || req.editor) {
        if (!id) {
            return res.render(fileLocation, {
                user: req.user,
                language,
                dataObject: {
                    uid: req.user.id,
                    username: req.user.name
                }
            });
        } else {
            let queryString = `CALL Get_RssForm_load(${id}, ${req.user.id});`;
            mysql.query(queryString, async (err, results, fields) => {
                if (err) {
                    return res.send("Please check your internet connection" + err);
                }
                // console.log( 'Getting data from table is: \n', results[ 0 ] );
                if (!results.length)
                    return res.render(fileLocation, {
                        user: req.user,
                        language,
                        dataObject: {
                            uid: req.user.id,
                            username: req.user.name
                        }
                    }); //await stringToArray
                dataObject = {
                    rssid: results[0].rssid,
                    uid: results[0].userid,
                    emails: await stringToArray(results[0].emails),
                    urls: await stringToArray(results[0].urls),
                    included: await stringToArray(results[0].included),
                    excluded: await stringToArray(results[0].excluded),
                    remarks: await stringToArray(results[0].remarks),
                    directorypath: results[0].directorypath,
                    username: req.user.name,
                    language: results[0].language,
                    frequency: results[0].frequency,
                    ndtype: results[0].ndtype
                };
                return res.render(fileLocation, {
                    user: req.user,
                    language,
                    dataObject
                });
            });
        }
    } else {
        res.redirect('/nopage');
    }
}

async function uploadtoolInfoData(res, dataObject) {
    dataObject = await arrayToStringObjectTool(dataObject);
    let rssid = shortid.generate();
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let update = dataObject.rssid ? true : false;
    dataObject.rssid = dataObject.rssid ? dataObject.rssid : rssid;
    dataObject.directorypath = `/feeds/${year}/${month}/`;
    let queryString = `CALL Upload_rss_InfoData(${dataObject.rssid}, ${dataObject.userid}, ${dataObject.emails ? dataObject.emails : ''},
                                                ${dataObject.urls ? dataObject.urls : ''}, ${dataObject.included ? dataObject.included : ''}, 
                                                ${dataObject.excluded ? dataObject.excluded : ''}, ${dataObject.remarks ? dataObject.remarks : ''},
                                                ${dataObject.directorypath}, ${dataObject.language}, ${dataObject.frequency}, ${dataObject.ndtype},
                                                ${update});`;
    mysql.query(queryString, async (cerr, cresults, cfields) => {
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
        await finalRssGeneration(dataObject.rssid, dataObject.language, await stringToArray(dataObject.urls), await stringToArray(dataObject.included), await stringToArray(dataObject.excluded), mailObj);
        let path = await dataObject.directorypath + dataObject.rssid + '.xml';
        return await res.redirect(path);
    });
}

async function deleteRssfromDbNFile(req, res, dataObject) {
    let queryString = `CALL Get_RssForm_load(${dataObject.rssid}, ${req.user.id});`;
    mysql.query(queryString, (err, results, fields) => {
        if (err) {
            return res.send("Please check your internet connection" + err);
        }
        if (!results.length)
            return res.send("Record not in Database");

        queryString = `CALL Delete_ByRssId(${results[0].rssid}, ${req.user.id});`;
        mysql.query(queryString, async (cerr, cresults, cfields) => {
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
    deleteRssfromDbNFile,
    language
};