const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('review', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    summary: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })
}
