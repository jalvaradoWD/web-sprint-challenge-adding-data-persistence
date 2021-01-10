// build your `/api/resources` router here
const knex = require("../../data/dbConfig");
const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.json(await knex("resources").select("*"));
});

router.post("/", (req, res) => {
  return res.json("Testing the post route for resources");
});

module.exports = router;
