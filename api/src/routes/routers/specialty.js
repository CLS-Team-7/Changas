const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Category, Specialty } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


router.get('/', async (req, res, next) => { //http://localhost:3001/specialty --> 
	try {
		let specialties = await Specialty.findAll({
			attributes: ["id", "category_id", "title"],
			include: {
				model: Category,
				attributes: ["title"]
			}
		});
		res.json(specialties);
	} catch (err) {
		next(err);
	};
});

module.exports = router;