const express = require("express");
const DB_CONNECT = require("./Config/DB_Connector");
const user = require("./Models/UserModel");
const task = require("./Models/TaskModel");
const auth_routes = require("./Routes/auth_routes");
const task_routes = require("./Routes/TaskRoutes");


const app = express();
app.use(express.json())

DB_CONNECT("mongodb://localhost:27017/Task_Management");

app.get("/health",(req,res)=>{
    res.send({Message : "The backend in healthy"});
})

app.use("/",auth_routes);
app.use("/",task_routes);

app.listen(5000 ,()=>{
    console.log("Server is running on 5000");
})