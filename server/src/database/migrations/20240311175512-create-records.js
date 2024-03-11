'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableName = 'records';
    const columns = {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      community_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      field_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    };

    await queryInterface.createTable(tableName, columns);
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('records');
  }
};