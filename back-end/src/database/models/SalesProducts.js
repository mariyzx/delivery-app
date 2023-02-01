module.exports = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('SalesProducts', { // coloca no plural
        saleId: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productId: DataTypes.INTEGER ,
        quantity: DataTypes.INTEGER,
    }, {
        tableName: 'sales_products', // altera nome tabela
        underscored: true,
        timestamps: false
    })

    SaleProduct.associate = (models) => {
        models.Sale.belongsToMany(models.Sale, {
            as: 'sales', 
            foreignKey: 'saleId',
            otherKey: 'productId',
            through: SaleProduct,
        });
        models.Product.belongsToMany(models.Product, {
            as: 'products', 
            foreignKey: 'productId',
            otherKey: 'saleId',
            through: SaleProduct,
        });
    }

    return SaleProduct;
}  