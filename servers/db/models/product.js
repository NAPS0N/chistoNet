'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: 'productId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }
  Product.init({
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    price: DataTypes.TEXT,
    description: DataTypes.TEXT,
    geo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};