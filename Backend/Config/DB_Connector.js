const mongoose = require("mongoose");


const DB_Connect = (Database_url)=>{
    mongoose.connect(Database_url).then(()=>{
        console.log("DataBase Connected");
    }).catch(err =>{
        console.log(err);
    })
}

module.exports = DB_Connect;