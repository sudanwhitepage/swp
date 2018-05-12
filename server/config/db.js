
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://db2:999@ds127994.mlab.com:27994/db2');
 
module.exports = connection;