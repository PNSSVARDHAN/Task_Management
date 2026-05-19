const user = require("../Models/UserModel");
const bcrypt = require("bcryptjs");

const Login = async (req,res)=>{
    try{
        const {username , password} = req.body;
        if(!username || !password){
            return res.send({message : "Missing Requried Fields"});
        }

        const user_data = await user.findOne({
            $or:[
                {email : username},
                {name : username}
            ]
        });
        if(user_data === null){
            return res.send({message : "User Not Found"});
        }
        const hasing_password = await bcrypt.compare(password,user_data.password);
        if(!hasing_password){
            return res.send({message : "Invalid Password"});
        }
        return res.send({message : `welcome ${user_data.name}`});
    }catch(err){
        return res.send({messsage : err.message});
    }
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
