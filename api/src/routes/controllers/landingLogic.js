const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();



router.get('/register', async (req, res, next) => {

});

router.get('/login', async (req, res, next) => {

});


module.exports = router;