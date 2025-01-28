
/**
 * @editor Adal Khan 28 JAN 2025
 * 
 * npm install knex --save
 * now install any of the following
 * pg, pg-native, sqlite3, better-sqplite3, mysql, mysql2, oracledb , tedious 
 * 
 * knex module is itself a function so the client parameter is required code: 1.0
 * */

// code: 1.0

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'myapp_test',
  },
});


require('dotenv').config(); // Load environment variables from .env

module.exports = {
  development: {
    client: process.env.DB_CLIENT, // Use environment variable
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};


const knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'myapp_test',
  },
});


// Data Types

table.increments(column)
table.integer(column)
table.bigInteger(column)
table.decimal(column, precision, scale)
table.float(column, precision, scale)
table.string(column,[length])
table.text(column,[textType])
table.boolean(column)
table.date(column)
table.dateTime(column,[options])
table.time(column)
table.timestamp(column,[options])
table.binary(column)


table.json(column)
table.jsonb(column)

table.uuid(column)
table.enum(column,values,[options])
table.specificType(column, type)


table.tinyint(column) 	→ Alias for small integers.
table.smallint(column) 	→ Alias for small integers.
table.mediumint(column) → Alias for medium integers.
table.bigint(column) 	→ Alias for big integers.


.primary()			Marks the column as the primary key.
.unique()			Adds a unique constraint to the column.
.notNullable()		Prevents null values in the column.
.nullable()			Allows null values in the column.
.defaultTo(value)	Sets a default value for the column.
.unsigned()			Unsigned integers (non-negative values).
.references(column)	Creates a foreign key reference to another table.
.onDelete(action)	Sets the behavior for foreign keys when the referenced row is deleted.
.onUpdate(action)	Sets the behavior for foreign keys when the referenced row is updated.



exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary(); // Auto-incrementing primary key
    table.string('name', 255).notNullable(); // String with max length 255
    table.string('email').unique().notNullable(); // Unique and not nullable
    table.integer('age').unsigned(); // Unsigned integer
    table.boolean('is_active').defaultTo(true); // Boolean with a default value
    table.json('settings'); // JSON column
    table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp with default
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};


// Query Builder SELECT INSERT UPDATE DELETE 









