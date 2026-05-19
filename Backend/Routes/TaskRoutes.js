const express = require("express");
const auth = require("../middleware/auth");
const AllTasks = require("../Controllers/Task_controller");

const router = express.Router();

router.get("/tasks",auth,AllTasks);


module.exports = router;