module.exports = (sequelize, DataTypes) => {
    const Sales = sequelize.define('Sale', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: DataTypes.INTEGER,
        sellerId: DataTypes.INTEGER,
        totalPrice: DataTypes.FLOAT,
        deliveryAddress: DataTypes.STRING,
        deliveryNumber: DataTypes.STRING,
        saleDate: DataTypes.DATETIME,
        status: DataTypes.STRING
    }, {
        tableName: 'sales',
        underscored: true,
        timestamps: false
    })

    Sales.associate = (models) => {
        Sales.belongsTo(models.User, {
            as: 'user', foreignKey: 'userId', otherKey: 'sellerId', through: Sales
        });
        Sales.hasMany(models.SalesProducts, {
            as: 'sales_products', foreignKey: 'id'
        })
    }

    return Sales;
}