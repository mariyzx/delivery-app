const salesService = require('../services/sales.service');

const createSale = async (req, res) => {
  const { body } = req;
  const newSale = await salesService.createSale(body);
  return res.status(201).json(newSale);
};

const getAllSales = async (_req, res) => {
  const allSales = await salesService.getAll();
  return res.status(200).json(allSales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;

  const sale = await salesService.getById(id);
  if (!sale) return res.status(404).json({ message: 'Sale does not exist' });
  return res.status(200).json(sale);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const upSale = await salesService.update(id, body);
  if (upSale) return res.status(201).json({ message: 'Status atualizado com sucesso' });
};

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
  updateSale,
};