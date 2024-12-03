'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cultivation_devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cultivation_id: {
        type: Sequelize.INTEGER
      },
      portable_devices_communities_id: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cultivation_devices');
  }
};