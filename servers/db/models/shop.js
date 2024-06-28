'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Company, {foreignKey: 'userId'})
         this.belongsTo(models.User, {foreignKey: 'userId'})
      // define association here
    }
  }
  Shop.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Companies',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    labelName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    logo: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    address: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    photo: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    lax: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    lon: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    phoneNumber: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};