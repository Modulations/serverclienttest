const { v4: uuidv4 } = require('uuid');
module.exports = function (inp, focus, callback) {
    var temp = uuidv4();
    focus[temp] = "yerr"
    console.log(focus)
    callback(null, inp + ' BAR (' + process.pid + ')')
}