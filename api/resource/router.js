// build your `/api/resources` router here
const knex = require("../../data/dbConfig");
const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.json(await knex("resources").select("*"));
});

router.post("/", async (req, res) => {
  /**
   * Expected fields
   *
   * @resource_name
   * @resource_description - Optional
   */
  try {
    const result = await knex("resources").insert(req.body);
    return res.json({ resource_id: result[0], ...req.body });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
