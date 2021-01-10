// build your `/api/projects` router here

const knex = require("../../data/dbConfig");
const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.json(await knex("projects").select("*"));
});

router.post("/", async (req, res) => {
  /**
   * Expected fields
   *
   * @project_name
   * @project_description - Optional
   * @project_completed - Boolean : Defaults to "false"
   */
  try {
    const result = await knex("projects").insert(req.body);
    return res.json({ project_id: result[0], ...req.body });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
