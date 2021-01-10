exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      const test = [];

      for (let i = 0; i < 4; i++) {
        test.push({
          task_id: i,
          task_description:
            "Perspiciatis eaque ut ipsa et. Perferendis rerum quas temporibus architecto placeat quas. Excepturi consequatur occaecati quidem. Enim iste fugit aut id delectus. Expedita voluptatem magnam voluptatem. Alias nam dolor doloribus quam voluptas ullam.",
          task_notes: null,
          task_completed: false,
          project_id: i,
        });
      }
      return knex("tasks").insert(test);
    });
};
