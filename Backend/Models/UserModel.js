const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        requried : true
    },
    email : {
        type : String,
        requried : true,
        unique : true
    },
    password : {
        type : String,
        requried : true
    },
    mobile :{
        type : Number,
        requried : true,
        unique : true
    }
},{
    timestamps : true
})

const user = mongoose.model("user" , UserSchema);

module.exports = user