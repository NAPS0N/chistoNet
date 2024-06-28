/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Chats",
      [
        {
          message: "Привет UserId 2",
          fromId: 1,
          toId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Привет UserId 1",
          fromId: 2,
          toId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Как дела UserId 2?",
          fromId: 1,
          toId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "У меня всё хорошо. Как твои дела userId 1?",
          fromId: 2,
          toId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Да по-тихой UserId 2. Только откинулся))",
          fromId: 1,
          toId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Привет UserId 3",
          fromId: 1,
          toId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Привет UserId 1",
          fromId: 3,
          toId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Как дела UserId 3?",
          fromId: 1,
          toId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "У меня всё хорошо. Как твои дела userId 1?",
          fromId: 3,
          toId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Да по-тихой UserId 3. Только откинулся))",
          fromId: 1,
          toId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Chats", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
