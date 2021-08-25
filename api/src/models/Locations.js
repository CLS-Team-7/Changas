const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('location', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true
        },
        lat: { 
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        lng: { 
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    });
};