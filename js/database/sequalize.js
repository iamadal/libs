/**
 * @author Adal Khan v1.0 - 25/01/2025
 * Strong Validation >> Validation From Front End >> Validation From Backend >> Validation from Database Engine
 */

// 01. Connect

const { DB } = require('sequalize')
const sq     = new DB('mysql://user:pass@example.com:5432/dbname') 

// 02. Testing Connection

try {
	await sq.authenticate();
	// MSG
} catch(error){
	// MSG
}

// 03. Closing the connection

sq.close()

// 04. For testing puspose use sqlite

const { Sequelize, Op, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

// 04. API Reference
// Define a Table for Schema

const users = sq.define('table_name', {
	 first_name: { type: DataTypes.STRING, allowNull: false },
	  last_name: { type: DataTypes.STRING},
	      email: { type: DataTypes.STRING}
})


// Model Synchronization. build table from the table

users.sync()               // Create table if not exist
users.sync({force: true})  // Drop if exist then create
users.sync({alter: true})  // Performs neccessary chages only


await users.sync() // Example
sq.sync()          // Sync All models

await users.drop() // Drop table
await sq.drop()    // Drop all table

sequelize.sync({ force: true, match: /_test$/ }) // This will run .sync() only if database name ends with '_test'

// For production environment please use sequelize-cli tools


/*
sequelize <command>

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file      [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file           [aliases: seed:create]

Options:
  --version  Show version number                                                  [boolean]
  --help     Show help                                                            [boolean]

Please specify a command
*/

// Data Types

// String

DataTypes.STRING;          // VARCHAR(255)
DataTypes.STRING(1234);    // VARCHAR(1234)
DataTypes.STRING.BINARY;   // VARCHAR BINARY
DataTypes.TEXT;            // TEXT
DataTypes.TEXT('tiny');    // TINYTEXT
DataTypes.CITEXT;          // CITEXT PostgreSQL and SQLite only.
DataTypes.TSVECTOR;        // TSVECTOR PostgreSQL only.

DataTypes.BOOLEAN; // TINYINT(1)

DataTypes.INTEGER; // INTEGER
DataTypes.BIGINT; // BIGINT
DataTypes.BIGINT(11); // BIGINT(11)

DataTypes.FLOAT; // FLOAT
DataTypes.FLOAT(11); // FLOAT(11)
DataTypes.FLOAT(11, 10); // FLOAT(11,10)

DataTypes.REAL; // REAL            PostgreSQL only.
DataTypes.REAL(11); // REAL(11)        PostgreSQL only.
DataTypes.REAL(11, 12); // REAL(11,12)     PostgreSQL only.

DataTypes.DOUBLE; // DOUBLE
DataTypes.DOUBLE(11); // DOUBLE(11)
DataTypes.DOUBLE(11, 10); // DOUBLE(11,10)

DataTypes.DECIMAL; // DECIMAL
DataTypes.DECIMAL(10, 2); // DECIMAL(10,2)

DataTypes.INTEGER.UNSIGNED;
DataTypes.INTEGER.ZEROFILL;
DataTypes.INTEGER.UNSIGNED.ZEROFILL;
// You can also specify the size i.e. INTEGER(10) instead of simply INTEGER
// Same for BIGINT, FLOAT and DOUBLE


DataTypes.DATE; // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
DataTypes.DATE(6); // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
DataTypes.DATEONLY; // DATE without time

{
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
}




const { Model, DataTypes, Deferrable } = require('sequelize');

class Foo extends Model {}
Foo.init(
  {
    // instantiating will automatically set the flag to true if not set
    flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },

    // default values for dates => current time
    myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

    // setting allowNull to false will add NOT NULL to the column, which means an error will be
    // thrown from the DB when the query is executed if the column is null. If you want to check that a value
    // is not null before querying the DB, look at the validations section below.
    title: { type: DataTypes.STRING, allowNull: false },

    // Creating two objects with the same value will throw an error. The unique property can be either a
    // boolean, or a string. If you provide the same string for multiple columns, they will form a
    // composite unique key.
    uniqueOne: { type: DataTypes.STRING, unique: 'compositeIndex' },
    uniqueTwo: { type: DataTypes.INTEGER, unique: 'compositeIndex' },

    // The unique property is simply a shorthand to create a unique constraint.
    someUnique: { type: DataTypes.STRING, unique: true },

    // Go on reading for further information about primary keys
    identifier: { type: DataTypes.STRING, primaryKey: true },

    // autoIncrement can be used to create auto_incrementing integer columns
    incrementMe: { type: DataTypes.INTEGER, autoIncrement: true },

    // You can specify a custom column name via the 'field' attribute:
    fieldWithUnderscores: {
      type: DataTypes.STRING,
      field: 'field_with_underscores',
    },

    // It is possible to create foreign keys:
    bar_id: {
      type: DataTypes.INTEGER,

      references: {
        // This is a reference to another model
        model: Bar,

        // This is the column name of the referenced model
        key: 'id',

        // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
        // Options:
        // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
        // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
        // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
      },
    },

    // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL and MSSQL
    commentMe: {
      type: DataTypes.INTEGER,
      comment: 'This is a column name that has a comment',
    },
  },
  {
    sequelize,
    modelName: 'foo',

    // Using `unique: true` in an attribute above is exactly the same as creating the index in the model's options:
    indexes: [{ unique: true, fields: ['someUnique'] }],
  },
);


//-------------------------------------------------------------------------

class User extends Model {
  static classLevelMethod() {
    return 'foo';
  }
  instanceLevelMethod() {
    return 'bar';
  }
  getFullname() {
    return [this.firstname, this.lastname].join(' ');
  }
}
User.init(
  {
    firstname: Sequelize.TEXT,
    lastname: Sequelize.TEXT,
  },
  { sequelize },
);

console.log(User.classLevelMethod()); // 'foo'
const user = User.build({ firstname: 'Jane', lastname: 'Doe' });
console.log(user.instanceLevelMethod()); // 'bar'
console.log(user.getFullname()); // 'Jane Doe'

//------------------------------------------------------------------------

const jane = User.build({ name: 'Jane' });
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"

await jane.save();
console.log('Jane was saved to the database!');


const jane = await User.create({ name: 'Jane' });
// Jane exists in the database now!
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"


const jane = await User.create({ name: 'Jane' });
// console.log(jane); // Don't do this
console.log(jane.toJSON()); // This is good!
console.log(JSON.stringify(jane, null, 4)); // This is also good!


const jane = User.build({ name: 'Jane' });
console.log(jane.favoriteColor); // "green"


const jane = await User.create({ name: 'Jane' });

jane.set({
  name: 'Ada',
  favoriteColor: 'blue',
});
// As above, the database still has "Jane" and "green"
await jane.save();
// The database now has "Ada" and "blue" for name and favorite color




const jane = await User.create({ name: 'Jane' });
jane.favoriteColor = 'blue';
await jane.update({ name: 'Ada' });
// The database now has "Ada" for name, but still has the default "green" for favorite color
await jane.save();
// Now the database has "Ada" for name and "blue" for favorite color



const jane = await User.create({ name: 'Jane' });
console.log(jane.name); // "Jane"
await jane.destroy();
// Now this entry was removed from the database



const jane = await User.create({ name: 'Jane' });
console.log(jane.name); // "Jane"
jane.name = 'Ada';
// the name is still "Jane" in the database
await jane.reload();
console.log(jane.name); // "Jane"



const jane = await User.create({ name: 'Jane' });
console.log(jane.name); // "Jane"
console.log(jane.favoriteColor); // "green"
jane.name = 'Jane II';
jane.favoriteColor = 'blue';
await jane.save({ fields: ['name'] });
console.log(jane.name); // "Jane II"
console.log(jane.favoriteColor); // "blue"
// The above printed blue because the local object has it set to blue, but
// in the database it is still "green":
await jane.reload();
console.log(jane.name); // "Jane II"
console.log(jane.favoriteColor); // "green"


const jane = await User.create({ name: 'Jane', age: 100, cash: 5000 });
await jane.increment({
  age: 2,
  cash: 100,
});

// If the values are incremented by the same amount, you can use this other syntax as well:
await jane.increment(['age', 'cash'], { by: 2 });

//-----------------------------------------------------------------------------
// Queries - Simple INSERT queries

// Create a new user
const jane = await User.create({ firstName: 'Jane', lastName: 'Doe' });
console.log("Jane's auto-generated ID:", jane.id);

// Find all users - SELECT * FROM ...
const users = await User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log('All users:', JSON.stringify(users, null, 2));



// SELECT foo, bar AS baz, qux FROM ...
Model.findAll({
  attributes: ['foo', ['bar', 'baz'], 'qux'],
});


// You can use sequelize.fn to do aggregations: - SELECT foo, COUNT(hats) AS n_hats, bar FROM ...

Model.findAll({
  attributes: ['foo', [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats'], 'bar'],
});


// This is a tiresome way of getting the number of hats (along with every column)
// SELECT id, foo, bar, baz, qux, hats, COUNT(hats) AS n_hats FROM ...
Model.findAll({
  attributes: [
    'id',
    'foo',
    'bar',
    'baz',
    'qux',
    'hats', // We had to list all attributes...
    [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats'], // To add the aggregation...
  ],
});

// This is shorter, and less error prone because it still works if you add / remove attributes from your model later
Model.findAll({
  attributes: {
    include: [[sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats']],
  },
});


Model.findAll({
  attributes: { exclude: ['baz'] },
});

//---------------- Operations ---------------------------------------

 
 const { Op } = require("sequelize");
Post.findAll({
  where: {
    [Op.and]: [{ a: 5 }, { b: 6 }],            // (a = 5) AND (b = 6)
    [Op.or]: [{ a: 5 }, { b: 6 }],             // (a = 5) OR (b = 6)
    someAttribute: {
      // Basics
      [Op.eq]: 3,                              // = 3
      [Op.ne]: 20,                             // != 20
      [Op.is]: null,                           // IS NULL
      [Op.not]: true,                          // IS NOT TRUE
      [Op.or]: [5, 6],                         // (someAttribute = 5) OR (someAttribute = 6)

      // Using dialect specific column identifiers (PG in the following example):
      [Op.col]: 'user.organization_id',        // = "user"."organization_id"

      // Number comparisons
      [Op.gt]: 6,                              // > 6
      [Op.gte]: 6,                             // >= 6
      [Op.lt]: 10,                             // < 10
      [Op.lte]: 10,                            // <= 10
      [Op.between]: [6, 10],                   // BETWEEN 6 AND 10
      [Op.notBetween]: [11, 15],               // NOT BETWEEN 11 AND 15

      // Other operators

      [Op.all]: sequelize.literal('SELECT 1'), // > ALL (SELECT 1)

      [Op.in]: [1, 2],                         // IN [1, 2]
      [Op.notIn]: [1, 2],                      // NOT IN [1, 2]

      [Op.like]: '%hat',                       // LIKE '%hat'
      [Op.notLike]: '%hat',                    // NOT LIKE '%hat'
      [Op.startsWith]: 'hat',                  // LIKE 'hat%'
      [Op.endsWith]: 'hat',                    // LIKE '%hat'
      [Op.substring]: 'hat',                   // LIKE '%hat%'
      [Op.iLike]: '%hat',                      // ILIKE '%hat' (case insensitive) (PG only)
      [Op.notILike]: '%hat',                   // NOT ILIKE '%hat'  (PG only)
      [Op.regexp]: '^[h|a|t]',                 // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
      [Op.notRegexp]: '^[h|a|t]',              // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
      [Op.iRegexp]: '^[h|a|t]',                // ~* '^[h|a|t]' (PG only)
      [Op.notIRegexp]: '^[h|a|t]',             // !~* '^[h|a|t]' (PG only)

      [Op.any]: [2, 3],                        // ANY (ARRAY[2, 3]::INTEGER[]) (PG only)
      [Op.match]: Sequelize.fn('to_tsquery', 'fat & rat') // match text search for strings 'fat' and 'rat' (PG only)

      // In Postgres, Op.like/Op.iLike/Op.notLike can be combined to Op.any:
      [Op.like]: { [Op.any]: ['cat', 'hat'] }  // LIKE ANY (ARRAY['cat', 'hat'])

      // There are more postgres-only range operators, see below
    }
  }
});


sequelize.define('foo', {
  bar: {
    type: DataTypes.STRING,
    validate: {
      is: /^[a-z]+$/i,          // matches this RegExp
      is: ["^[a-z]+$",'i'],     // same as above, but constructing the RegExp from a string
      not: /^[a-z]+$/i,         // does not match this RegExp
      not: ["^[a-z]+$",'i'],    // same as above, but constructing the RegExp from a string
      isEmail: true,            // checks for email format (foo@bar.com)
      isUrl: true,              // checks for url format (https://foo.com)
      isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
      isIPv4: true,             // checks for IPv4 (129.89.23.1)
      isIPv6: true,             // checks for IPv6 format
      isAlpha: true,            // will only allow letters
      isAlphanumeric: true,     // will only allow alphanumeric characters, so "_abc" will fail
      isNumeric: true,          // will only allow numbers
      isInt: true,              // checks for valid integers
      isFloat: true,            // checks for valid floating point numbers
      isDecimal: true,          // checks for any numbers
      isLowercase: true,        // checks for lowercase
      isUppercase: true,        // checks for uppercase
      notNull: true,            // won't allow null
      isNull: true,             // only allows null
      notEmpty: true,           // don't allow empty strings
      equals: 'specific value', // only allow a specific value
      contains: 'foo',          // force specific substrings
      notIn: [['foo', 'bar']],  // check the value is not one of these
      isIn: [['foo', 'bar']],   // check the value is one of these
      notContains: 'bar',       // don't allow specific substrings
      len: [2,10],              // only allow values with length between 2 and 10
      isUUID: 4,                // only allow uuids
      isDate: true,             // only allow date strings
      isAfter: "2011-11-05",    // only allow date strings after a specific date
      isBefore: "2011-11-05",   // only allow date strings before a specific date
      max: 23,                  // only allow values <= 23
      min: 23,                  // only allow values >= 23
      isCreditCard: true,       // check for valid credit card numbers

      // Examples of custom validators:
      isEven(value) {
        if (parseInt(value) % 2 !== 0) {
          throw new Error('Only even values are allowed!');
        }
      }
      isGreaterThanOtherField(value) {
        if (parseInt(value) <= parseInt(this.otherField)) {
          throw new Error('Bar must be greater than otherField.');
        }
      }
    }
  }
});










