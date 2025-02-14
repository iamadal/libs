import knex from 'knex';
import knexfile from './knexfile.js';

const DB = knex(knexfile.development);

// USE Console to log output


/* SELECT */

// SELECT * FROM users;
async function all(){
	const users = await DB('users').select('*')
	console.log(users)
}


// SELECT * FROM users WHERE id = 1 LIMIT 1;
async function selectFirstRow(){
	const users = await DB('users').where('id',1).first()
	console.log(users)

}

/* Multi Condition  */
// SELECT * FROM users WHERE age > 18 AND status = 'active';
async function multipleCondition(){
	const results = await knex('users').where('age', '>', 18).andWhere('status', 'active');

}


// Data Insertion -------------------------------------------------------------------------

async function insert(){
	try {
		const Person = await DB('users').insert({name: 'AdalLx', email: 'md@cc.coms'})
	} catch(err){
		console.log(err)
	}
}


async function insertM(){
	await DB('users').insert([
		{ name: 'Bob', email: 'bob@example.com' },
		{ name: 'Charlie', email: 'charlie@example.com' }
	  ]);
	  
}

// Data Update
// UPDATE users SET name = 'Updated Name' WHERE id = 8;
async function update() {
	await DB('users').where('id', 8).update({ name: 'Updated Name' });

}


// DELETE
// DELETE FROM users WHERE id = 1;

async function del(){
	await DB('users').where('id', 8).del()
}





async function findUserByEmailAndRole(email, role) {
	const user = await knex('users')
	  .select('*')
	  .where('email', email)
	  .andWhere('role', role);  // Parameterized query
	console.log(user);
  }
  
  findUserByEmailAndRole('example@example.com', 'admin');
  



