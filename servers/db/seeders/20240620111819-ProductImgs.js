'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImgs', [
      {
        productId: 1,
        img: 'https://mir-clininga.ru/upload/iblock/20c/0t8oifztnogwk3gv8462gejekgj55wmb.jpeg',
        alt: 'Тележка одноведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        img: 'https://mir-clininga.ru/upload/iblock/6a9/t6lamgrfda6lnf1kxmaf9uyyjmqv42ae.png',
        alt: 'Тележка одноведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        img: 'https://mir-clininga.ru/upload/resize_cache/iblock/1f2/800_800_140cd750bba9870f18aada2478b24840a/b3vyv76m6ipkqaqkqz6l8y39acrly0w9.jpg',
        alt: 'Тележка одноведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        img: 'https://mir-clininga.ru/upload/iblock/897/p0lbkunzdos3x6fxrkyo24044r1ycu0z.jpg',
        alt: 'Тележка двухведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        img: 'https://mir-clininga.ru/upload/iblock/514/v5wqpp19g2bh31whr5fan2n5qbpcfqm1.jpeg',
        alt: 'Тележка двухведерная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        img: 'https://mir-clininga.ru/upload/iblock/514/v5wqpp19g2bh31whr5fan2n5qbpcfqm1.jpeg',
        alt: 'Волео Про комплексная тележка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        img: 'https://mir-clininga.ru/upload/iblock/514/v5wqpp19g2bh31whr5fan2n5qbpcfqm1.jpeg',
        alt: 'Волео Про комплексная тележка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        img: 'https://mir-clininga.ru/upload/iblock/514/v5wqpp19g2bh31whr5fan2n5qbpcfqm1.jpeg',
        alt: 'Волео Про комплексная тележка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        img: 'https://mir-clininga.ru/upload/iblock/ec9/weumsdj38c9vjh30gx8spjs6hhqsahmr.jpg',
        alt: 'Волео Про комплексная тележка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        img: 'https://mir-clininga.ru/upload/iblock/ec9/weumsdj38c9vjh30gx8spjs6hhqsahmr.jpg',
        alt: 'Волео Про комплексная тележка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        img: 'https://mir-clininga.ru/upload/iblock/ec9/weumsdj38c9vjh30gx8spjs6hhqsahmr.jpg',
        alt: 'Комплекты для уборки TTS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        img: 'https://mir-clininga.ru/upload/iblock/ec9/weumsdj38c9vjh30gx8spjs6hhqsahmr.jpg',
        alt: 'Комплекты для уборки TTS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        img: 'https://mir-clininga.ru/upload/iblock/ec9/weumsdj38c9vjh30gx8spjs6hhqsahmr.jpg',
        alt: 'Комплекты для уборки TTS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        img: 'https://mir-clininga.ru/upload/iblock/ec9/weumsdj38c9vjh30gx8spjs6hhqsahmr.jpg',
        alt: 'Держатель мопа 40 см. под карман',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        img: 'https://mir-clininga.ru/upload/iblock/ec9/weumsdj38c9vjh30gx8spjs6hhqsahmr.jpg',
        alt: 'Держатель мопа 40 см. под карман',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        img: 'https://mir-clininga.ru/upload/iblock/ec9/weumsdj38c9vjh30gx8spjs6hhqsahmr.jpg',
        alt: 'Держатель мопа 40 см. под карман',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 7,
        img: 'https://mir-clininga.ru/upload/resize_cache/iblock/1e3/800_800_140cd750bba9870f18aada2478b24840a/9nuxazmkamtikchn0zhzzv6ysg03uska.png',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 7,
        img: 'https://mir-clininga.ru/upload/resize_cache/iblock/1e3/800_800_140cd750bba9870f18aada2478b24840a/9nuxazmkamtikchn0zhzzv6ysg03uska.png',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        img: 'Поломоечная машина самоходная VinnerMyer S510B L60 АКБ 60Ач',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        img: 'Поломоечная машина самоходная VinnerMyer S510B L60 АКБ 60Ач',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        img: 'Поломоечная машина самоходная VinnerMyer S510B L60 АКБ 60Ач',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        img: 'Поломоечная машина самоходная VinnerMyer S510B L60 АКБ 60Ач',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        img: 'Поломоечная машина самоходная VinnerMyer S510B L60 АКБ 60Ач',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 9,
        img: 'Моющий пылесос',
        alt: 'Сетевая однодисковая роторная поломоечная машина VinnerMyer LS154',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 9,
        img: 'https://mir-clininga.ru/upload/iblock/41e/na94zt1g08hkc8yv2qo99bkptivn50mq.jpg',
        alt: 'Моющий пылесос',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 9,
        img: 'https://mir-clininga.ru/upload/iblock/41e/na94zt1g08hkc8yv2qo99bkptivn50mq.jpg',
        alt: 'Моющий пылесос',
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
