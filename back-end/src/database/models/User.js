module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        tableName: 'users',
        timestamps: false
    })

    User.associate = (models) => {
        User.hasMany(models.Sale, {
            as: 'user', foreignKey: 'userId'
        });
        User.hasMany(models.Sale, {
            as: 'seller', foreignKey: 'sellerId'
        })

    }

    return User;
}  