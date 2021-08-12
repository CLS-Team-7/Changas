const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('answer', {
		id: {
			type: DataTypes.INTEGER, // VER SI INTEGER U OTRO TIPO DE TIPO SIRVE
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		question_id: { // rompe si ponemos este atributo y en las asociaciones una FK con el mismo nombre, pero porque no rompe en los otros???
			type: DataTypes.INTEGER,
			// allowNull: false
			foreignKey: true
		},
		answer: {
			type: DataTypes.STRING(220),
			allowNull: false,
		}
	});
};