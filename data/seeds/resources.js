exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      const test = [];

      for (let i = 0; i < 4; i++) {
        test.push({
          resource_id: i,
          resource_name: `Resource Name ${i}`,
          resource_description:
            "Perspiciatis eaque ut ipsa et. Perferendis rerum quas temporibus architecto placeat quas. Excepturi consequatur occaecati quidem. Enim iste fugit aut id delectus. Expedita voluptatem magnam voluptatem. Alias nam dolor doloribus quam voluptas ullam.",
        });

        return knex("resources").insert(test);
      }
    });
};
