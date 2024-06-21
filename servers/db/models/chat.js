const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      this.belongsTo(models.Chat, { foreignKey: "fromId" });
      this.belongsTo(models.Chat, { foreignKey: "toId" });
    }
  }
  Chat.init(
    {
      message: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Chat",
    }
  );
  return Chat;
};
