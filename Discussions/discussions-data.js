var consts = require('../Common/consts.js').consts,
    utils = require('../Common/utils.js');

var generate = function generate(orgUnit, userId) {
    var results = {},
        userIds = utils.getUsers(orgUnit, userId);

    results[orgUnit] = {};
    
    for(var j = 0; j < userIds.length; j++){
        var user = userIds[j];
        results[orgUnit][user] = { "0": utils.getRandomGrade().toString() };
    }
    
    return results;
};

var generate = function generate(orgUnit, roleId, start, end) {
    var results = {},
        startDate = new Date(start).setUTCHours(5,0,0,0),
        endDate = new Date(end).setUTCHours(5,0,0,0),
        dateDiff = endDate - startDate,
        userIds = utils.getUsers(orgUnit, userId);

    results[orgUnit] = {};
    
    numVals = Math.floor(dateDiff / consts.MS_PER_DAY);

    for(var j = 0; j < userIds.length; j++){
        results[orgUnit][userIds[j]] = {};
        
        for(var k = numVals; k >= 0; k--){
            results[orgUnit][userIds[j]][endDate - consts.MS_PER_DAY * k] = (Math.round(Math.random() * 25)).toString();
        }
    }

    return results;
};

module.exports = {
    'generate': generate
};