/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table("post_scheduled", function(table) {
        table.string("mimetype").defaultTo("image/png")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table("post_scheduled", function(table) {
        table.dropColumn("mimetype")
    })
};
