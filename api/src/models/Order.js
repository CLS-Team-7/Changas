const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        user_id: {			// id del user que pregunta
            type: DataTypes.UUID,
            allowNull: false
        },
        post_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        // ver si aca guardamos alguna id del pago de mercadopago
        // cuando se paga, mercado pago deberia dar algun ide o algo que sirva para guardar en la DB,
        // y mandar desde el front un dipatch(completeOrder) a Order para meter isCompleted en true.
    });
};