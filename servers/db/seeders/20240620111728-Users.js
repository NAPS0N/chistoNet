'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'lovemorkov@mail.ru',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'semechkin@mail.ru',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'dionis@mail.ru',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'kapusta@mail.ru',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'nyashka@gmail.ru',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
