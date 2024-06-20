'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  ProductImg.init({
    productId: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    alt: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ProductImg',
  });
  return ProductImg;
};