const { Product } = require('../database/models');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

module.exports = { getAll, getById };

// branch Liz
