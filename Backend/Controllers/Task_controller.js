const task = require("../Models/TaskModel");
const user = require("../Models/UserModel");


const AllTasks = async (req,res)=>{
    try{
        const alltasks = await user.find();
        return res.send({message : "Data Fetched" , alltasks});
    }catch(err){
        return res.send(err.message);
    }
}

module.exports = AllTasks;