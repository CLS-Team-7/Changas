const { Op } = require("sequelize")
const axios = require('axios').default;
const { User, Post, Order, Category, Specialty, Location } = require('../db.js');

async function getAllLocations(_req, res, next) { //http://localhost:3001/location --> 
	try {
		let locations = await Location.findAll({
			attributes: {exclude:["createdAt", "updatedAt"]},
		});
		res.json(locations);
	} catch (err) {
		next(err);
	};
};

module.exports = {getAllLocations}