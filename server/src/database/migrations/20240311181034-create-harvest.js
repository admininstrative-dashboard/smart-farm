'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('harvests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      record_id: {
        type: Sequelize.INTEGER
      },
      yield: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      acres_cut: {
        type: Sequelize.INTEGER
      },
      workers_quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('harvests');
  }
};