/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('litems', (table) => {
      table.increments('id')
      table.string('item')
      table.integer('amount')
      table.integer('price')
      table.boolean('compleated').defaultTo(false)
    })
  
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('litems')
    
  };
