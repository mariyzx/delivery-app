const { Sale, SalesProducts, User } = require('../database/models');

// const test = {
//   productId: 9,
//   quantity: 1,
// };

const createSale = async (body) => {
  const { newData: { dataToSales, dataToSalesProduct } } = body;

  const newSale = await Sale.create({ 
    ...dataToSales,
    saleDate: Date(),
    status: 'Pendente',
  });

  dataToSalesProduct.forEach(async (sale) => {
    await SalesProducts.create({
      saleId: newSale.id,
      productId: sale.productId,
      quantity: sale.quantity,
    });
  });
  // ** Dados mockado // Falta o front
  //  await SaleProduct.create({
  //   saleId: newSale.id,
  //   productId: dataToSalesProduct.productId,
  //   quantity: dataToSalesProduct.quantity,
  // });

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
  const saleProduct = await SalesProducts.findAll({
    where: { saleId: id }, // precisa retornar nao so os dados de sales, mas tb salesproducts
  });
  return { sale, saleProduct };
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