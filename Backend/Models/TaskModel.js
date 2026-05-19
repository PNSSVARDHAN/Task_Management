const mongoose = require("mongoose");
const user = require("./UserModel");


const Task_Schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    priortiy :{
        type:String,
        enum : ["High" , "Medium" ,"low"],
        default : "Medium"
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    last_date : {
        type : Date,
        requried : true
    }
},{
    timestamps : true
})

const task = mongoose.model("task",Task_Schema);

module.export = task;