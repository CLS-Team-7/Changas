const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('post', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      //allowNull: false,
      primaryKey: true,
    },
    typePost: {
      type: DataTypes.ENUM('Offer', 'Petition'),
      allowNull: false,
    },
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // description: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    // },
    // image: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // priceRange: {
    //   type: DataTypes.STRING, //RANGE(DataTypes.INTEGER),
    //   allowNull: true,
    // },
    // timeRange: {
    //   type: DataTypes.STRING, //RANGE(DataTypes.INTEGER),
    //   allowNull: true,
    // },
    // category: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // specialty: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // paymentMethods: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: false,
    // },
    // workingArea: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: false,
    // },
    // isActive: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    // },
  });
};