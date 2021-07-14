let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, lowercase : true, required : true},
    age : {type : Number, default : 0},
    bio : {type : String},
    hobbies : {type : [String]}
}, {timestamps : true});

let User = mongoose.model("User", userSchema);

module.exports = User;

