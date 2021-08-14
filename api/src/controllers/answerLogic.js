const { Op } = require("sequelize");
const axios = require("axios").default;
const { User, Post, Order, Category, Specialty, Question, Answer, Report, Review } = require("../db.js");




module.exports = {
	getAllSarasa,
	createSarasa,
	deleteSarasa
};