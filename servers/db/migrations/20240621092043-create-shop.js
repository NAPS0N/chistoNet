'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      labelName: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      logo: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      address: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      photo: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      lax: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      lon: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      phoneNumber: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shops');
  },
};
