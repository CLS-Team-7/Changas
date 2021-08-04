// "use strict";

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     return await queryInterface.bulkCreate("order", [
//       {
//         id: 400,
//         title: "Plomero",
//         isActive: true,
//         payment: "Done",
//         isComplete: true,
//       },
//       {

//       },
//     ]);
//   },

//   down: async (queryInterface, Sequelize) => {
//     return await queryInterface.bulkDelete("order", null, {});
//   },
// };

// const { Router } = require('express');
// const axios = require('axios');
// const { User, Order, Post } = require('../../db.js');
// const Sequelize = require('sequelize');
// const { v4: uuidv4 } = require('uuid');
// const router = Router();

async function createOrder(req, res, next) {
  try {
    // let { id, title, isActive, payment, isComplete } = req.body;
    let [order, created] = await Order.findOrCreate({
      where: {
        id: 400,
        title: "Plomero",
        isActive: true,
        payment: "Done",
        isComplete: true,
      },
    });
    if (created) order.setOrder(dietTypes);
    return res.json(order);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
