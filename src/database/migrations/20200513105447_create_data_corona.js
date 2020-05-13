exports.up = function (knex) {
  return knex.schema.createTable("data_corona", (table) => {
    table.increments("id");
    table.date("date").notNullable();
    table.datetime("update_at", { precision: 6 }).notNullable();
    table.integer("newConfirmed").notNullable();
    table.integer("newDeaths").notNullable();
    table.integer("newRecovered").notNullable();
    table.integer("totalConfirmed").notNullable();
    table.integer("totalDeaths").notNullable();
    table.integer("totalRecovered").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("data_corona");
};
