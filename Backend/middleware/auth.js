const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req,res,next)=>{
    // console.log("it is in jwt");
    try{
        const authheader = req.headers.authorization;

        if(!authheader){
            return res.send({message : "Invalid request"});
        }

        const token = authheader.split(" ")[1];
        // console.log(token);
        const verification = await jwt.verify(
            token,
            process.env.JWT,
        )
        // console.log(verification);
        next();
    }catch(err){
        return res.send({message : err});
    }
}

module.exports = auth;