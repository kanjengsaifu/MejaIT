var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const usersModel = new Schema({
    name: {type: String, lowercase: true},
    department: {type: String},
    location: {type: String}
});

module.exports = mongoose.model('users', usersModel);