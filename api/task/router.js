// build your `/api/tasks` router here

const knex = require("../../data/dbConfig");
const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.json(
    await knex("tasks")
      .select([
        "t.task_id",
        "t.task_description",
        "t.task_notes",
        "t.task_completed",
        "p.project_name",
        "p.project_description",
      ])
      .from("tasks as t")
      .innerJoin("projects as p", "p.project_id", "t.project_id")
  );
});

router.post("/", async (req, res) => {
  /**
   * Expected fields
   *
   * @project_name
   * @task_description - Required
   * @task_notes - Optional
   * @project_id - Required
   */
  try {
    const result = await knex("tasks").insert(req.body);
    return res.json({ project_id: result[0], ...req.body });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
