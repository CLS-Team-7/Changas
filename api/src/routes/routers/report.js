const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Answer, Question, Review } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();



router.get('/', async (req, res, next) => {

});



module.exports = router;