const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('complaint', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    reportType: {
      type: DataTypes.ENUM('Orden', 'Post', 'Usuario'),
      allowNull: false,
    },
    complaint: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    evidence: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  })
}
