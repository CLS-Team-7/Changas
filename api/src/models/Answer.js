const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('answer', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		question_id: {
			type: DataTypes.UUID,
			allowNull: false
		},
		user_id: {			// id del user que responde
			type: DataTypes.UUID,
			allowNull: false
		},
		answer: {
			type: DataTypes.STRING(220),
			allowNull: false,
			unique: true
		}
	});
};