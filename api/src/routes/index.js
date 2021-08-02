const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post } = require('../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


const userLogic = require('./controllers/userLogic')


router.use('/user', userLogic);



module.exports = router;  