'use strict';
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          phoneNumber: "+79999999999",
          email: 'lovemorkov@mail.ru',
          firstName: 'Nina',
          lastName: 'Polyak',
          password: await bcrypt.hash("123456", 10),
          isBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phoneNumber: "+79999999998",
          email: "semechkin@mail.ru",
          firstName: "Nikolay",
          lastName: "Elay",
          password: await bcrypt.hash("123456", 10),
          isBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phoneNumber: "+79999999997",
          email: "dionis@mail.ru",
          password: await bcrypt.hash("123456", 10),
          firstName: "Petr",
          isBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phoneNumber: "+79999999996",
          email: "kapusta@mail.ru",
          firstName: "Brus",
          lastName: "Willes",
          password: await bcrypt.hash("123456", 10),
          isBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phoneNumber: "+79999999995",
          email: "nyashka@gmail.ru",
          firstName: "Kiano",
          lastName: "Ruvs",
          password: await bcrypt.hash("123456", 10),
          isBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
