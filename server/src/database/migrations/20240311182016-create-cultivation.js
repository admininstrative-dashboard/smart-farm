'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cultivations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      record_id: {
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      avg_humidity: {
        type: Sequelize.FLOAT
      },
      avg_temperature: {
        type: Sequelize.FLOAT
      },
      fertilizer_quantity: {
        type: Sequelize.FLOAT
      },
      water_amount: {
        type: Sequelize.FLOAT
      },
      workers_quantity: {
        type: Sequelize.INTEGER
      },
      other_factors: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('cultivations');
  }
};