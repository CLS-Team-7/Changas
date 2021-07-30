const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('Winter', 'Autumn', 'Spring', 'Summer'),
            allowNull: false,
        },
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        duration: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });
};