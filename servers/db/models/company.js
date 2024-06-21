'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: 'userId'})
      this.hasOne(models.Shop, {foreignKey: 'userId'})
      // define association here
    }
  }
  Company.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    inn: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    website: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    workPhoneNumber: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    corporateEmail: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};