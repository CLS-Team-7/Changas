const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post } = require('../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


// const landingLogic = require('../controllers/landingLogic');
// const homeLogic = require('../controllers/homeLogic');
// const adminLogic = require('../controllers/adminLogic');
const mercadopago = require('./routers/mercadoPago');
const routerCheckout = require('./routers/checkout');
const routerUser = require('./routers/user');
const routerPost = require('./routers/post');
const routerOrder = require('./routers/order');
const routerCategory = require('./routers/category');
const routerSpecialty = require('./routers/specialty');
const routerQuestion = require('./routers/question');
const routerAnswer = require('./routers/answer');
const routerReport = require('./routers/report');
const routerReview = require('./routers/review');


// router.use('/', landingLogic);
// router.use('/home', homeLogic);
router.use('/user', routerUser);
router.use('/post', routerPost);
router.use('/category', routerCategory);
router.use('/specialty', routerSpecialty);
router.use('/order', routerOrder);
router.use('/question', routerQuestion);
router.use('/answer', routerAnswer);
router.use('/review', routerReview);
router.use('/report', routerReport);
router.use('/mercadopago', mercadopago);
router.use('/testcheckout', routerCheckout); // ver primero lo de mercadopago
// router.use('/admin', adminLogic);




module.exports = router;