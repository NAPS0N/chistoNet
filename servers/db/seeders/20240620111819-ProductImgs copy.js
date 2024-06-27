'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImgs', [
      {
        productId: 1,
        img: '/public/inventory/cart1.jpeg',
        alt: 'Тележка одноведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        img: '/public/inventory/cart2_2.jpg',
        alt: 'Тележка одноведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        img: '/public/inventory/cart3.jpg',
        alt: 'Тележка одноведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        img: '/public/inventory/cart2buckets1.jpeg',
        alt: 'Тележка двухведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        img: '/public/inventory/cart2buckets2.jpg',
        alt: 'Тележка двухведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        img: '/public/inventory/voleo_pro.jpg',
        alt: 'Волео Про комплексная тележка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        img: '/public/inventory/voleo_pro2.jpg',
        alt: 'Волео Про комплексная тележка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        img: '/public/inventory/multi-func_cart1.jpg',
        alt: 'Многофункциональная уборочная тележка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        img: '/public/inventory/multi-func_cart2.jpg',
        alt: 'Многофункциональная уборочная тележка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        img: '/public/inventory/TTS.jpg',
        alt: 'Комплекты для уборки TTS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        img: '/public/inventory/TTS2.jpg',
        alt: 'Комплекты для уборки TTS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        img: '/public/inventory/TTS3.jpg',
        alt: 'Комплекты для уборки TTS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        img: '/public/inventory/mop1.jpeg',
        alt: 'Держатель мопа 40 см. под карман',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        img: '/public/inventory/mop2.jpg',
        alt: 'Держатель мопа 40 см. под карман',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        img: '/public/inventory/mop3.jpeg',
        alt: 'Держатель мопа 40 см. под карман',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 7,
        img: '/public/inventory/rotor1.jpeg',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 7,
        img: '/public/inventory/rotor2.jpeg',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 7,
        img: '/public/inventory/rotor3.jpeg',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 7,
        img: '/public/inventory/rotor4.jpeg',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        img: '/public/inventory/vacuemCleaner1.jpg',
        alt: 'Моющий пылесос',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        img: '/public/inventory/vacuemCleaner2.jpg',
        alt: 'Моющий пылесос',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        img: '/public/inventory/vacuemCleaner3.jpg',
        alt: 'Моющий пылесос',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 9,
        img: '/public/consumables/paper1.jpg',
        alt: 'Бумажная продукция',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 9,
        img: '/public/consumables/paper2.jpg',
        alt: 'Бумажная продукция',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 9,
        img: '/public/consumables/paper3.jpg',
        alt: 'Бумажная продукция',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 10,
        img: '/public/consumables/sponge1.jpg',
        alt: 'Губки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 10,
        img: '/public/consumables/sponge2.jpg',
        alt: 'Губки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 10,
        img: '/public/consumables/sponge3.jpg',
        alt: 'Губки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 11,
        img: '/public/consumables/rag1.jpeg',
        alt: 'Тряпки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 11,
        img: '/public/consumables/rag2.jpeg',
        alt: 'Тряпки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 11,
        img: '/public/consumables/rag3.jpeg',
        alt: 'Тряпки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 12,
        img: '/public/cleanser/antiseptic1.jpg',
        alt: 'Дезинфицирующие средства',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 12,
        img: '/public/cleanser/antiseptic2.jpg',
        alt: 'Дезинфицирующие средства',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 12,
        img: '/public/cleanser/antiseptic3.jpg',
        alt: 'Дезинфицирующие средства',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 13,
        img: '/public/cleanser/window1.jpeg',
        alt: 'Средства для мытья стекол',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 13,
        img: '/public/cleanser/window2.jpg',
        alt: 'Средства для мытья стекол',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 14,
        img: '/public/cleanser/antistatic1.jpg',
        alt: 'Средства для удаления следов скотча',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 14,
        img: '/public/cleanser/antistatic2.jpg',
        alt: 'Средства для удаления следов скотча',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImgs', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
