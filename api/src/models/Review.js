const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, //incrementa el id cada vez que se crea un post
            primaryKey: true
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        isValidated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
};

// const { DataTypes } = require('sequelize')


//hacer validaciones si corresponde, aca o en los controllers????

// module.exports = (sequelize) => {
//   sequelize.define('review', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     // user_id: { // ID DEL USUARIO QUIEN RECIBE EL REVIEW // ver si la relacion no es many to many
//     //   type: DataTypes.UUID,
//     //   allowNull: false
//     // },
//     order_id: { // tiene que venir del front, ESTO es lo que habilita a que el usuario que contrato pueda
//       type: DataTypes.UUID,
//       allowNull: false
//     },
//     summary: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     score: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   })
// }

