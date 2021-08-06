const { Op } = require("sequelize")
const axios = require('axios').default;
const { User, Post, Order, Category, Specialty } = require('../db.js');









module.exports = {
	getAllsarasa,
	getSarasaById,
	createSarasa,
	updateSarasa,
	deleteSarasa
};