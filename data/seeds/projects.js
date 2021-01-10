exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      const test = [];
      for (let i = 0; i < 4; i++) {
        test.push({
          project_id: i,
          project_name: `Project Name ${i}`,
          project_description:
            "Perspiciatis eaque ut ipsa et. Perferendis rerum quas temporibus architecto placeat quas. Excepturi consequatur occaecati quidem. Enim iste fugit aut id delectus. Expedita voluptatem magnam voluptatem. Alias nam dolor doloribus quam voluptas ullam.",
          project_completed: false,
        });
      }

      // Inserts seed entries
      return knex("projects").insert(test);
    });
};
