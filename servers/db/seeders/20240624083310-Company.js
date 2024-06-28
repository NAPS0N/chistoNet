'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [{
      userId: 1,
      inn: "7705581614",
      website: 'https://www.karcher.ru',
      workPhoneNumber: '74956621919',
      corporateEmail: 'info@karcher.ru',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  {
    userId: 2,
    inn: "234403584209",
    website: 'https://mir-clininga.ru',
    workPhoneNumber: '78612050143',
    corporateEmail: 'zakaz@mir-clininga.ru',
    createdAt: new Date(),
    updatedAt: new Date(),
  }])
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
