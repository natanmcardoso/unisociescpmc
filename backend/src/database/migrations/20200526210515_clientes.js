exports.up = function(knex) {
    return knex.schema.createTable('clientes', 
    function (table) {
        table.string('id').primary();
        table.string('nome,').notNullable();
        table.string('cpf,').notNullable();
        table.string('nomeEmpresa,').notNullable();
        table.string('cnpj,').notNullable();
        table.string('telefone,').notNullable();
        table.string('email,').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
};
