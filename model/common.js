
exports.stringToArray = function (str, separator=',') {
    if (!str || str.length == 0)
        return [];
    return str.split(separator);
}

exports.makeArrRecordUniqueNormal = async function (arrOld) {
    let tempObj = {};
    await arrOld.forEach((record) => {
        record = record.trim();
        tempObj[record] = true
    });
    let arrNew = [];
    arrNew = Object.keys(tempObj).map((key) => [key]);
    return arrNew;
}

exports.arrayToStringObjectTool = async function (dataObject) {
    for (let key in dataObject) {
        if (Array.isArray(dataObject[key])) {
            dataObject[key] = await makeArrRecordUniqueNormal(dataObject[key]);
            let str = '';
            for (let i = 0; i < dataObject[key].length; i++) {
                if (str != '') str += ',';
                str += dataObject[key][i];
            }
            dataObject[key] = str;
        }
    }
    return await dataObject;
}
