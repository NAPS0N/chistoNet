'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: 'categoryId' });
      this.hasMany(models.Chat, { foreignKey: 'userId' });
      this.hasOne(model.Individual, {foreignKey: 'userId'})
      this.hasOne(model.Company, {foreignKey: 'userId'})
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
        allowNull: false,
        type: DataTypes.TEXT,
      },
      lastName: {
        allowNull: false,
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
      modelName: 'User',
    }
  );
  return User;
};
