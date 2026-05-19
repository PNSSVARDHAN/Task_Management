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
    }
},{
    timestamps : true
})

const user = mongoose.model("user" , UserSchema);

module.exports = user