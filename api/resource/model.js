// build your `Resource` model here
const knex = require("../../data/dbConfig");

const getResources = async (req, res) => {
  return res.json(await knex("resources").select("*"));
};

const createResources = async (req, res) => {
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
};

module.exports = { getResources, createResources };
