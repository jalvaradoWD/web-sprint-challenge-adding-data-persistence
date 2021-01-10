// build your `/api/resources` router here

const { getResources, createResources } = require("./model");
const router = require("express").Router();

router.get("/", getResources);
router.post("/", createResources);

module.exports = router;
