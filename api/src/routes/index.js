const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post } = require('../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


// const landingLogic = require('../controllers/landingLogic');
// const homeLogic = require('../controllers/homeLogic');
const routerUser = require('./routers/user');
const routerPost = require('./routers/post');
// const checkoutLogic = require('../controllers/checkoutLogic');
// const adminLogic = require('../controllers/adminLogic');


// router.use('/', landingLogic);
// router.use('/home', homeLogic);
router.use('/user', routerUser);
router.use('/post', routerPost);
// router.use('/checkout', checkoutLogic);
// router.use('/admin', adminLogic);




module.exports = router;