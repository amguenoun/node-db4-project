
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { r_id: 1, i_id: 1, quantity: 2 },
        { r_id: 2, i_id: 2, quantity: 4 },
        { r_id: 2, i_id: 3, quantity: 5 },
        { r_id: 3, i_id: 4, quantity: 3 },
        { r_id: 3, i_id: 5, quantity: 4 },
        { r_id: 3, i_id: 6, quantity: 2 }

      ]);
    });
};
