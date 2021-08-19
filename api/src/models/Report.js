const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('report', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    reportSubject: {
      type: DataTypes.ENUM('user', 'post', 'question', 'answer'), // no haria falta user, no es una red social, se juzgan los POSTEOS como interacciones
      allowNull: false,
    },
    user_id: { // ID DEL USUARIO QUE HACE EL REPORT
      type: DataTypes.UUID,
      allowNull: false
    },
    reported_user: { // ID DEL USUARIO QUE HACE EL REPORT
      type: DataTypes.UUID,
      allowNull: true
    },
    post_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    complaint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    evidence: {
      type: DataTypes.STRING, // ver con sequelize-file, type.BLOB?
      allowNull: true,
    },
    isSettled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
