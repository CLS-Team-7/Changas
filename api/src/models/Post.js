const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('post', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      //allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    typePost: {
      type: DataTypes.ENUM('Offer', 'Petition'),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priceRange: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    timeRange: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    specialty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentMethods: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    workingArea: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
  });
};