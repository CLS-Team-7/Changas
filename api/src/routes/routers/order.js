const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Answer, Question, Review } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { updateOrder, deleteOrder, getAllOrders, getOrderById, createOrder } = require('../../controllers/orderLogic.js');
const router = Router();



router.get('/', getAllOrders);

router.get('/:idOrder', getOrderById);

router.post('/', createOrder); // logica con checkout

router.put('/:idOrder', updateOrder)

router.delete('/:idOrder', deleteOrder)


module.exports = router;