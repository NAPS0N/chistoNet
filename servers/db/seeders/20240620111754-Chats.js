/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Chats",
      [
        {
          id: 1,
          message: "Привет UserId 2",
          fromId: 1,
          toId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          message: "Привет UserId 1",
          fromId: 2,
          toId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          message: "Как дела UserId 2?",
          fromId: 1,
          toId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          message: "У меня всё хорошо. Как твои дела userId 1?",
          fromId: 2,
          toId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          message: "Да по-тихой UserId 2. Только откинулся))",
          fromId: 1,
          toId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },




  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chats', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }

};
