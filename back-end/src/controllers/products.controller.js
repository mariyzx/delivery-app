const productService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await productService.getById(id);
  return res.status(200).json(product);
};

module.exports = { getAllProducts, getProductById };