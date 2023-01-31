'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', { // corrige nome tabela
      sale_id: {
        allowNull: false,
        // autoIncrement: true, // remove autoincrement
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      product_id: {
        allowNull: false,
        primaryKey: true, // adiciona 
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id'
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    }, { underscored: true, tableName: 'sales_products' }) // adiciona underscored e corrige name
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products'); // corrige name
  }
};
