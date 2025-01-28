'use strict';
require('dotenv').config()

const bcrypt = require('bcryptjs');


module.exports = {
  async up(queryInterface, Sequelize) {
    const pass   = await bcrypt.hash(process.env.ADMIN_PASS, 10)
    const user   = process.env.ADMIN_NAME
    const email  = process.env.ADMIN_EMAIL
    const phone  = process.env.ADMIN_PHONE
    const role   = process.env.ADMIN_ROLE
    const status = process.env.ADMIN_STATUS

    await queryInterface.bulkInsert('users', [{
          username: user,
          password: pass,
             email: email,
             phone: phone,
              role: role,
            status: status,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
