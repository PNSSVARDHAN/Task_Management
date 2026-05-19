const user = require("../Models/UserModel");
const bcrypt = require("bcryptjs");

const Login = (req,res)=>{
    console.log("next");
}

const Register = async (req,res)=>{
    try{
        const user_data = req.body;
        const hashed_password = await bcrypt.hash(user_data.password,10);
        user_data.password = hashed_password
        await user.create(user_data);
        res.send({message : "User added Succesfully"});
    }catch(err){
        if(err.code === 11000){
            const err_field = Object.keys(err.keyPattern)[0];
            res.send({message : `${err_field} is already registered`});
        }
        if(err.name === "ValidationError"){
            console.log(err.ValidationError);
            res.send({message : err.message});
        }
    }
}

module.exports={Login , Register};
