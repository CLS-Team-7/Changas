const { Router } = require('express');
const axios = require('axios');
const { Activity, Country } = require('../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


const countriesLogic = require('./controllers/countriesLogic')


router.use('/countries', countriesLogic);



module.exports = router;  