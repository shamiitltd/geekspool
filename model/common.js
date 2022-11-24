const { mysql } = require("../config/database");

async function getDropDown(name) {
    const returnValue = new Promise(function (resolve, reject) {
        let queryString = `CALL Get_dropDown_Details('${name}');`;
        mysql.query(queryString, async (err, results, fields) => {
            if (err) {
                reject("Error: Get_dropDown_Details is deleted please add this Stored Procedure again, Error location: model/common.js");
            }
            if (results && results.length)
                resolve(results[0][0]);
        });
    });
    return returnValue;
}

async function stringToArray(str, separator = ',') {
    if (!str || str.length == 0)
        return [];
    return await str.split(separator);
}

async function makeArrRecordUniqueNormal(arrOld) {
    let tempObj = {};
    await arrOld.forEach((record) => {
        record = record.trim();
        tempObj[record] = true
    });
    let arrNew = [];
    arrNew = Object.keys(tempObj).map((key) => [key]);
    return arrNew;
}

async function arrayToStringObjectTool(dataObject, separator=',') {
    for (let key in dataObject) {
        if (Array.isArray(dataObject[key])) {
            dataObject[key] = await makeArrRecordUniqueNormal(dataObject[key]);
            let str = '';
            for (let i = 0; i < dataObject[key].length; i++) {
                if (str != '') str += separator;
                str += dataObject[key][i];
            }
            dataObject[key] = str;
        }
    }
    return await dataObject;
}
async function arrayToStringObjectToolWithDuplicates(dataObject, separator = ',') {
    for (let key in dataObject) {
        if (Array.isArray(dataObject[key])) {
            let str = '';
            for (let i = 0; i < dataObject[key].length; i++) {
                if (str != '') str += separator;
                str += dataObject[key][i];
            }
            dataObject[key] = str;
        }
    }
    return await dataObject;
}


async function isObjEmpty(obj) {
    for (let x in obj) {
        return await false;
    }
    return await true;
}

module.exports = {
    stringToArray,
    arrayToStringObjectTool,
    arrayToStringObjectToolWithDuplicates,
    makeArrRecordUniqueNormal,
    isObjEmpty,
    getDropDown
}