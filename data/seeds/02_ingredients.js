
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'Egg' },
        { id: 2, name: 'Milk' },
        { id: 3, name: 'Sugar' },
        { id: 4, name: 'Peanut Butter' },
        { id: 5, name: 'Jelly' },
        { id: 6, name: 'Bread Slice' }
      ]);
    });
};
