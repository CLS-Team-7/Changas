const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true, 
        },
        firstName: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ID_Passport:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        summary:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        jobDone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isVaccinated:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isNew: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },        
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    });
};