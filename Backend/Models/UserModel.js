const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    mobile :{
        type : Number,
        required : true,
        unique : true
    },
    role :{
        type: String,
        required : true,
        enum : ["Employee","Manager","Admin"],
        default : "Employee"
    },
    bio : {
        type:String,
    },
    skills : {
        type : [String]
    },
    is_active :{
        type : Boolean
    },
    last_seen :{
        type : Date
    },
},{
    timestamps : true
})

const user = mongoose.model("user" , UserSchema);

module.exports = user