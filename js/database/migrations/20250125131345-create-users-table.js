'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {

        id: { type: Sequelize.INTEGER, allowNull: false,    autoIncrement: true, primaryKey: true},
  username: { type: Sequelize.STRING,  allowNull: false,    unique: true },
  password: { type: Sequelize.STRING,  allowNull: false},
     email: { type: Sequelize.STRING,  allowNull: false,    unique: true },
     phone: { type: Sequelize.STRING,  allowNull: false,    unique: true },
      role: { type: Sequelize.STRING,  allowNull: false, defaultValue: 'user'},
    status: { type: Sequelize.STRING,  allowNull: false, defaultValue: 'none'},
created_at: { type: Sequelize.DATE,    allowNull: false},
updated_at: { type: Sequelize.DATE,    allowNull: false}
    
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
