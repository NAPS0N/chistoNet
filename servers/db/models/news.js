const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate(models) {
      // this.belongsTo(models.Chat, { foreignKey: "fromId" });
      // this.belongsTo(models.Chat, { foreignKey: "toId" });
    }
  }
  News.init(
    {
      title: DataTypes.TEXT,

      text: DataTypes.TEXT,

      photo: DataTypes.TEXT,

      video: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "News",
    }
  );
  return News;
};
