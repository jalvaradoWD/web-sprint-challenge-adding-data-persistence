// build your `/api/tasks` router here

const { getTasks, createTasks } = require("./model");
const router = require("express").Router();

router.get("/", getTasks);
router.post("/", createTasks);

module.exports = router;
