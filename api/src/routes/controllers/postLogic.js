const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


// solo los usuarios registrados pueden crear posts

router.get('/:idPost', async (req, res, next) => {

});



module.exports = router;