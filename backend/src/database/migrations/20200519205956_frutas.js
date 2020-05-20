exports.up = function(knex) {
    return knex.schema.createTable('frutas', 
    function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('tipo').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};

