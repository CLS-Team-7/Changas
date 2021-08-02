const { DataTypes, BOOLEAN } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('post', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      //allowNull: false,
      primaryKey: true, 
    },
    typePost: {
      type: DataTypes.ENUM('Offer', 'Petition'),
      allowNull: false,
  },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    priceRange:{
      type: DataTypes.RANGE,
      allowNull: false,
    },
    timeRange: {
      type: DataTypes.RANGE,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.ENUM,
      allowNull: false,
    },
    paymentMethods: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    workingArea: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
};
