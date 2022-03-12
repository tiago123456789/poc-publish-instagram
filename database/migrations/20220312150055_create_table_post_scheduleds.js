/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("post_scheduled", function(table) {
      table.increments("id").primary()
      table.enum("type_post", ['feed', 'story'])
      table.string('file')
      table.dateTime("scheduled_at")
      table.boolean("is_published").defaultTo(false)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("post_scheduled")
};
