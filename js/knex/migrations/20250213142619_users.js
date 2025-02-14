/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(DB) {
	return DB.schema.createTable('users',table => {
		table.increments('id')
		table.string('name',100).notNullable()
		table.string('email',100).notNullable().unique()
	})
  	
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
