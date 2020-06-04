moment = require('moment');

const timestamp = function() {
    return moment().format('MM-DD-YYYY h:mm:ssa');
}

module.exports = timestamp;