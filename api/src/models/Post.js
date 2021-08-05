const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('post', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      //allowNull: false,
      primaryKey: true,
    },
    // user_id: {
    //   type: DataTypes.UUID,
    //   // allowNull: false // commentado porque sino los seeders rompen aca, habria que ver como modificar los seeders
    // },
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
      type: DataTypes.ARRAY(DataTypes.STRING), // DataTypes.RANGE(DataTypes.INTEGER),
      allowNull: true,
    },
    timeRange: {
      type: DataTypes.ARRAY(DataTypes.STRING), // DataTypes.RANGE(DataTypes.INTEGER),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING, // INTEGER, cambiar seeder
      allowNull: false,
    },
    specialty: {
      type: DataTypes.STRING, // INTEGER, cambiar seeder
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