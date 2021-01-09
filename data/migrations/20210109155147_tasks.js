exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("task_id").primary().notNullable();
    table.string("task_description", 255).notNullable();
    table.string("task_notes", 255);
    table.boolean("task_completed").notNullable().defaultTo(false);
    table.integer("project_id").unsigned().notNullable();

    table.foreign("project_id").references("projects.project_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
