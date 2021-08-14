const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        user_id: {			// id del user que crea la orden
            type: DataTypes.UUID,
            allowNull: false
        },
        post_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        title: { // semanal, quincenal, mensual
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1000
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        status: {
            type: DataTypes.ENUM("pending", "approved"), //, "failed")
            allowNull: false,
            defaultValue: "pending"
        },
        mp_id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "pending"
        },
        mp_date_created: {              // toda la info de aca para abajo deberia estar guardada en OTRO modelo, OrderDetail (pero no es indispensable para ahora)
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "pending"
        },
        total_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
        // isCompleted: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        // },
        // ver si aca guardamos alguna id del pago de mercadopago
        // cuando se paga, mercado pago deberia dar algun ide o algo que sirva para guardar en la DB,
        // y mandar desde el front un dipatch(completeOrder) a Order para meter isCompleted en true.
    });
};