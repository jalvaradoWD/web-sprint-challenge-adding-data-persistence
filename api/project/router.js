// build your `/api/projects` router here

const { getTasks, createTask } = require("./model");
const router = require("express").Router();

router.get("/", getTasks);
router.post("/", createTask);

module.exports = router;
