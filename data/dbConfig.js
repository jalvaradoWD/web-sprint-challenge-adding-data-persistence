// Complete your db configuration using the `environment` variable.
const environment = process.env.NODE_ENV || "development";
const dbConfig = require("../knexfile")[environment];

module.exports = require("knex")(dbConfig);
