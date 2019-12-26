
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.text("name", 128)
            .unique()
            .notNullable();
        tbl.text("instructions")
            .notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("recipes");
};
