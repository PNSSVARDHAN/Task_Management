const express = require("express");
const {Login , Register} = require("../Controllers/auth_controller");

const Router = express.Router();

Router.post("/register",Register);
Router.post("/login",Login);


module.exports = Router;