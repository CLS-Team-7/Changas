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
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    specialty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      type: DataTypes.TEXT,
      allowNull: true,
    },
    priceRange: { // MODIFICAR A basePrice LUEGO DE TENER EL OK DESDE EL FRONT
      type: DataTypes.ARRAY(DataTypes.STRING), // esto tiene que ser solo un string en el futuro, ver con el formulario de post del front, como manda la info
      allowNull: true,
    },
    timeRange: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
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
    acceptsQuestions: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      // defaultValue: false // depende el tipo de post. El formulario controlario deberia reflejar esto
    },
    isPremium: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
};