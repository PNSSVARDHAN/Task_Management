const mongoose = require("mongoose");


const ProjectsSchema = mongoose.Schema({
    projectName : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    team:{
        type : String
    },
    status : {
        type : String,
        required : true,
        enum: ["Planning", "Active", "On Hold", "Completed", "Cancelled"],
        default: "Planning"
    },
    priority : {
        type : String,
        enum : ["Low" , "Medium" , "High"],
        default : "Medium"
    },
    startDate : {
        type : Date
    }
},{timestamps : true}
)

const projects = mongoose.model("project",ProjectsSchema);

exports.module = projects