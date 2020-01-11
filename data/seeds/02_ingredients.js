
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'Egg' },
        { id: 2, name: 'Pints of Milk' },
        { id: 3, name: 'Cups of Sugar' },
        { id: 4, name: 'Dabs of Peanut Butter' },
        { id: 5, name: 'Dabs of Jelly' },
        { id: 6, name: 'Bread Slice' }
      ]);
    });
};
