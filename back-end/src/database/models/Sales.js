module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
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
        saleDate: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        tableName: 'sales',
        underscored: true,
        timestamps: false
    })

    Sale.associate = (models) => {
        models.Sale.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId',
        });
        models.Sale.belongsTo(models.User, {
            as: 'seller',
            foreignKey: 'sellerId',
        });
    }

    return Sale;
}