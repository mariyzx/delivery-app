const { Sale, SaleProduct, User } = require('../database/models');

const test = {
  productId: 9,
  quantity: 1,
};

const createSale = async (body) => {
  const newSale = await Sale.create({ 
    ...body,
    saleDate: Date(),
    status: 'Pendente',
  });

  // ** Dados mockado // Falta o front
   await SaleProduct.create({
    saleId: newSale.id,
    productId: test.productId,
    quantity: test.quantity,
  });

  return newSale;
};

const getAll = async () => {
  const salesList = await Sale.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
    ],
  });
  return salesList;
};

const getById = async (id) => {
  const sale = await Sale.findByPk(id);
  return sale;
};

const update = async (id, body) => {
  const sale = await Sale.update({ status: body.status }, { where: { id } });
  return sale;
};

module.exports = {
  createSale,
  getAll,
  getById,
  update,
};