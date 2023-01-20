module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        urlImage: DataTypes.STRING,
    }, {
        tableName: 'products',
        underscored: true,
        timestamps: false
    })

    Product.associate = (models) => {
        Product.hasMany(models.SalesProducts, {
            as: 'products', foreignKey: 'productId'
        })
    }

    return Product;
}  