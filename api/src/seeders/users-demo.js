"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("user", [
      {
        id: 100,
        firstname: "Jhon",
        lastname: "Doe",
        age: 29,
        ID_Passport: 12345678,
        address: "Calle Campana 235, Palermo",
        phoneNumber: 1135698745,
        email: "user01@changas.com",
        photo: "https://ojodepezfotografos.com/wp-content/uploads/2019/03/SESION-DE-FOTOS-PERFIL-PROFESIONAL-10.jpg",
        score: 4.5,
        jobDone: 2,
        isVaccinated: true,
        isNew: false,
        isAdmin: false,
        isActive: true,
      },
      {
        
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("user", null, {});
  },
};