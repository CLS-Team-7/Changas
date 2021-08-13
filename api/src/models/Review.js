const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        review_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, //incrementa el id cada vez que se crea un post
            primaryKey: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.UUID,
            allowNull: false,
        }
    });
};