const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paymentState: {
            type: DataTypes.ENUM("Done", "Pending"),
            allowNull: false,
        },
        isComplete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });
};