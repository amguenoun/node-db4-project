
exports.up = function (knex) {
    return knex.schema.createTable('recipes_ingredients', tbl => {
        tbl.integer('r_id')
            .unsigned()
            .references('recipes.id')
            .notNullable()
            .onDelete('CASCADE');
        tbl.integer('i_id')
            .unsigned()
            .references('ingredients.id')
            .notNullable()
            .onDelete('CASCADE');
        tbl.float('quantity');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipes_ingredients');
};
