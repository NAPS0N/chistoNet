'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shops', [{
      userId: 1,
      labelName: 'KARCHER',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Kaercher_Logo_2015.png',
      address: 'Воздухоплавательная ул., 19, Санкт-Петербург, 196006',
      photo: 'https://s1.kaercher-media.com/media/image/selection/166780/d0/Esli-moika-to-Kerkher-2024-ru.webp',
      description: 'достижение высоких целей – задача каждого дня мы ставим перед собой высокие цели и любим решать сложные задачи. неважно, идет ли речь об обычной уборке вокруг дома или выполнении таких грандиозных проектов по сохранению объектов исторического наследия, как, например, очистка скульптур американских президентов на горе рашмор, – при помощи своей высокоэффективной уборочной техники компания kärcher стремится сделать повседневную жизнь лучше. в том числе и вашу жизнь: мы поможем вам реализовать большие планы, сохранить ценности и приумножить их.  что же двигает нас вперед?  наша выраженная инновационная философия, ориентированная на внедрение новых технологий, приносящих пользу людям. наш перфекционизм, заставляющий не останавливаться на достигнутом и усовершенствовать и без того удачные решения. наша готовность прокладывать новые пути и преодолевать их. наше стремление всегда делать дело, а не просто говорить о нем. все это позволяет нам создавать прогрессивную уборочную технику, впечатляющую высокой производительностью, эргономичностью и превосходным качеством. технику, опережающую свое время – ведь поддержание чистоты во всем мире является нашей главной заботой. и мы неутомимо работаем над достижением этой цели – день за днем.',
      lax: '59.896513',
      lon: '30.337176',
      phoneNumber: '89818492542',
      createdAt: new Date(),
      updatedAt: new Date(),

    },
  {
    userId: 2,
    labelName: 'Мир Клининга',
    logo: 'https://mir-clininga.ru/bitrix/images/logo2.png',
    address: 'г. Краснодар, ул. Зиповская 5, с. 8',
    photo: 'https://mir-clininga.ru/upload/iblock/7eb/w6sdu6qr75smxsvkl98gpunn2uumka7a.jpg',
    description: 'успешно работая на рынке с 2010 года, мы специализируемся на реализации профессионального оборудования, расходных материалов, специнвентаря и моющих средств. клининг – одно из самых перспективных направлений, но одновременно весьма специфичный вид сервиса. одно дело - протереть полы в собственной квартире. и совсем иное – ликвидировать последствия масштабного события (вечеринки, банкета, другого мероприятия), навести идеальный порядок, чистоту в торгово-развлекательном, фитнес-центре, в отеле, в зале аэропорта, на огромных площадях административного учреждения, где имеет место высокая проходимость.  в то же время чистота кухонного и торгового оборудования, поверхностей - один из ключевых факторов, оказывающих влияние на формирование благоприятного имиджа любой компании, предприятия. именно поэтому вопрос поддержания чистоты заслуживает особого внимания.',
    lax: '45.065813',
    lon: '38.991923',
    phoneNumber: '89530873330',
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
    await queryInterface.bulkDelete('Shops', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
