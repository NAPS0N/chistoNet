const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: "categoryId" });
      this.hasMany(models.Chat, { foreignKey: "fromId" });
      this.hasMany(models.Chat, { foreignKey: "toId" });
      this.hasOne(models.Individual, { foreignKey: "userId" });
      this.hasOne(models.Company, { foreignKey: "userId" });
      this.hasOne(models.Shop, { foreignKey: "userId" });

    }
  }
  User.init(
    {
      phoneNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      firstName: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      lastName: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isBlocked: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
