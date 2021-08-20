const { Op } = require("sequelize");
const axios = require("axios").default;
const { User, Post, Order, Category, Specialty, Question, Answer, Report, Review } = require("../db.js");

async function getAllReports(req, res, next) {
	try {
		let reports = await Report.findAll({
			attributes: { exclude: ["updatedAt"] },
			order: [["createdAt", 'DESC']],
			include: [
				{
					model: User,
					attributes: ["id", "given_name", "family_name", "fullName", "summary", "picture"],
				},
				{
					model: Post,
					attributes: ["user_id", "typePost", "title", "description", "image"],
				},
				{
					model: Question,
					attributes: { exclude: ["id", "updatedAt", "post_id"] },
				},
				{
					model: Answer,
					attributes: { exclude: ["id", "updatedAt", "question_id"] },
				},
			]
		})
		res.json(reports);
	} catch (err) {
		next(err);
	};
};

async function getReportById(req, res, next) {
	let { idReport } = req.params;
	if (idReport && !isNaN(idReport) && parseInt(idReport) > 0) { // 36 es la length del UUID
		try {
			let result = await Report.findOne({
				where: {
					id: idReport,
				},
				attributes: { exclude: ["updatedAt"] },
				include: [
					{
						model: User,
						attributes: ["id", "given_name", "family_name", "fullName", "summary", "picture"],
					},
					{
						model: Post,
						attributes: ["user_id", "typePost", "title", "description", "image"],
					},
					{
						model: Question,
						attributes: { exclude: ["id", "updatedAt", "post_id"] },
					},
					{
						model: Answer,
						attributes: { exclude: ["id", "updatedAt", "question_id"] },
					},
				]
			});
			if (result) res.json(result);
			else throw new Error('ERROR 500: El reporte de abuso buscado no fue encontrado en la base de datos (ID no existe)');
		} catch (err) {
			next(err);
		};
	} else {
		try {
			throw new TypeError('ERROR 404: ID inválido (ID no es un tipo INTEGER válido).') // automaticamente rechaza un error, sin buscar por la DB
		} catch (err) {
			next(err);
		}
	}
};

async function createReport(req, res, next) {

	let { reportSubject, user_id, reported_user, post_id, question_id, answer_id, complaint, evidence } = req.body;

	try {
		let newReport = await Report.create({
			reportSubject,
			user_id,
			reported_user,
			post_id,
			question_id,
			answer_id,
			complaint,
			evidence
		})
		newReport.setUser(reported_user)
		if (post_id) newReport.setPost(post_id);
		if (question_id) newReport.setQuestion(question_id);
		if (answer_id) newReport.setAnswer(answer_id);
		res.json(newReport)
	} catch (err) {
		next(err);
	};
};

async function updateReport(req, res, next) {

}

async function deleteReport(req, res, next) {

}


module.exports = {
	getAllReports,
	getReportById,
	createReport,
	updateReport,
	deleteReport
};