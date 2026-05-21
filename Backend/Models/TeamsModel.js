const mongoose = require("mongoose");

const TeamsSchema = mongoose.Schema({
    teamName : {
        type : String,
        required : true
    },
    teamLead : {
        type : String,
        required : true
    },
    members : {
        type : [String]
    },
    created_by : {
        type : String,
        required : true
    }
},{
    timestamps : true
});


const Teams = mongoose.model("teams",TeamsSchema);

exports.module = Teams;
