const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('question', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		post_id: {
			type: DataTypes.UUID,
			allowNull: false
		},
		user_id: {			// id del user que pregunta
			type: DataTypes.UUID,
			allowNull: false
		},
		question: {
			type: DataTypes.STRING(220),
			allowNull: false,
			unique: true
		}
	});
};