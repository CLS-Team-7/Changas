const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('report', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    reportType: {
      type: DataTypes.ENUM('Order', 'Post', 'User'),
      allowNull: false,
    },
    user_id: { // ID DEL USUARIO QUE HACE EL REPORT
      type: DataTypes.UUID,
      allowNull: false
    },
    post_id: { // esto tiene que venir del front
      type: DataTypes.UUID,
      allowNull: true
    },
    order_id: { // esto tiene que venir del front
      type: DataTypes.UUID,
      allowNull: true
    },
    // reportedUser_id : { // ID DEL USUARIO QUE HACE EL REPORT
    //   type: DataTypes.UUID,
    //   allowNull: true
    // },
    complaint: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    evidence: {
      type: DataTypes.STRING(255), // ver con sequelize-file, type.BLOB?
      allowNull: true,
    },
  })
}
