const jwt = require("jsonwebtoken");

const checkAccess = async (req,res,next)=>{
    try{
        const authheader = req.headers.authorization;
        if (!authheader){
            return res.send({message : "Token Missing"});
        }
        const token = authheader.split(" ")[1];

        const decode = jwt.verify(
            token,
            process.env.JWT
        )
        // console.log(decode.role);
        if(decode.role === "Admin" || decode.role === "Manager"){
            console.log("Access Granted");
            next();
        }
        else{
            return res.send({message : "Access denied"});
        }
    }catch(err){
        // console.log(err);
        if(err.name === "JsonWebTokenError"){
            return res.send({message : "Follow the JWT standard format"});
        }
        
        return res.send({message : err});
    }
}

module.exports = checkAccess