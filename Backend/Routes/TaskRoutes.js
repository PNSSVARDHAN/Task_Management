const express = require("express");
const auth = require("../middleware/auth");
const AllTasks = require("../Controllers/Task_controller");
const checkAccess = require("../middleware/roleAccess");

const router = express.Router();

router.get("/tasks",checkAccess,AllTasks);


module.exports = router;