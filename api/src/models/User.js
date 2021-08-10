const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        sub: {
            type: DataTypes.STRING,
            allowNull: true, // VER CON LOS SEEDERS
            // unique: true
        },
        given_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        family_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        fullName: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.given_name} ${this.family_name}`;
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ID_Passport: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phoneNumber: {
            type: DataTypes.STRING, // desde el json no puede empezar por 0. Chequear si no conviene datatype string
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        picture: {
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
        isDataComplete: {
            type: DataTypes.BOOLEAN,
            // allowNull: false,
            defaultValue: false
        },
        // deberia guardarse aca cualquier informacion de mercadopago. VER CON LA API COMO FUNCIONA 
        // Ejemplo: un user quiere ofrecer servicios y cobrar por mercadopago, su info de mercado pago (solo la relevante), se tiene que guardar aca.
    });
};