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
    });

    return Product;
}  