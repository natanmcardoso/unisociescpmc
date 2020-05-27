exports.up = function(knex) {
    return knex.schema.createTable('clientes', 
    function (table) {
        table.string('id').primary();
        table.string('nomeproduto,').notNullable();
        table.string('tipoproduto,').notNullable();
        table.string('unidade,').notNullable();
        table.string('preco,').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
};
