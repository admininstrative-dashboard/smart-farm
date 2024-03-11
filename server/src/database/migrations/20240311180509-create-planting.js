'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plantings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      record_id: {
        type: Sequelize.INTEGER
      },
      crop_quantity: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      workers_quantity: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('plantings');
  }
};