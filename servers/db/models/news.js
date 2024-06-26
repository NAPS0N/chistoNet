const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate() {}
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
