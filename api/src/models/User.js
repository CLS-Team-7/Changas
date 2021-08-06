const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        fullName: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.firstName} ${this.lastName}`;
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ID_Passport: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.BIGINT, // desde el json no puede empezar por 0. Chequear si no conviene datatype string
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        photo: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        jobsDone: {
            type: DataTypes.INTEGER, // arrancaria siempre en cero 
            allowNull: true,
        },
        // category: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // specialty: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        isVaccinated: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isNew: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
    });
};