const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Answer, Question, Review, Report } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();



router.get('/', async (req, res, next) => {
	try {
		let reports = await Report.findAll()
		res.json(reports);
	} catch (err) {
		next(err);
	};

});



module.exports = router;