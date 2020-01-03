
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, name: 'Omelette', instructions: '1. Crack Eggs into a bowl, 2. Whisk them, 3.Cook them on medium high until solid and yellow' },
        { id: 2, name: 'Milkshake', instructions: '1. Put milk in blender with sugar, 2. Blend until frothy' },
        { id: 3, name: 'PBJ', instructions: '1. Smear peanut butter on a slice of bread, 2. Smear jelly on the other slice, 3. Put slices together' }
      ]);
    });
};
