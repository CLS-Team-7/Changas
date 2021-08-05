const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('specialty', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        categoryId: {
            type: DatatTypes.INTEGER,
            allowNull: false,
            // foreignKey: true // esto va asi? o se hace solo con el include?
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    });
};