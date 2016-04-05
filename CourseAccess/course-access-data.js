var consts = require('../Common/consts.js').consts,
    utils = require('../Common/utils.js');

var generateLast = function generateLast(orgUnit, userId) {
    var results = {},
        userIds = utils.getUsers(orgUnit, userId);

    results[orgUnit] = {};
    
    for(var j = 0; j < userIds.length; j++){
        var user = userIds[j];
        results[orgUnit][user] = { "0": '/Date('+utils.getRandomLogin(consts.DATE_RANGE)+')/' };
    }
    
    return results;
};

module.exports = {
    'generateLast': generateLast
};