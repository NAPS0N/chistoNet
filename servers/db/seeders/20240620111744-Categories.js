'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      title: 'Toвары',
      pId: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      title: 'Оборудование',
      pId: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Аренда',
      pId: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Вакансии',
      pId: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Уборочные тележки',
      pId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Роторная машина',
      pId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Поломоечная машина',
      pId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ковровый эстрактор',
      pId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ковровый эстрактор',
      pId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Комплекты для уборки пола',
      pId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
