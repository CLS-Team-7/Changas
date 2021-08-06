const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Category, Specialty } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();

router.get('/', async (req, res, next) => { //http://localhost:3001/category --> 
	try {
		let categories = await Category.findAll({
			attributes: ["id", "title"],
			include: {
				model: Specialty,
				attributes: ["id", "title"]
			}
		});
		res.json(categories);
	} catch (err) {
		next(err);
	};
});

module.exports = router;