const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


// trae los datos del user, su 'panel de control'
router.get('/:idUser', async (req, res, next) => {

});

router.get('/favs', async (req, res, next) => {

});

router.get('/myposts', async (req, res, next) => {


});


module.exports = router;