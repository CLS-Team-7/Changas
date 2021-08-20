const { Op } = require("sequelize");
const axios = require("axios").default;
const { User, Post, Order, Category, Specialty, Question, Answer, Report, Review } = require("../db.js");


async function getAllAnswers(req, res, next) {
	try {
		let answers = await Answer.findAll({
			attributes: { exclude: ["updatedAt", "question_id"] },
			order: [["createdAt", 'DESC']],
			include: [
				{
					model: Question,
					attributes: { exclude: ["updatedAt", "post_id"] },
				},
				{
					model: Report,
					attributes: { exclude: ['reported_user', 'post_id', 'question_id', 'answer_id', 'updatedAt'] },
					order: [["createdAt", 'DESC']],
				}
			]
		});
		res.json(answers);
	} catch (err) {
		next(err);
	};
};

async function getAnswerById(req, res, next) {
	let { idAnswer } = req.params;
	if (idAnswer && !isNaN(idAnswer) && parseInt(idAnswer) > 0) {
		try {
			let answer = await Answer.findOne({
				where: {
					id: idAnswer
				},
				attributes: { exclude: ["updatedAt", "question_id"] },
				include: [
					{
						model: Question,
						attributes: { exclude: ["updatedAt", "post_id"] }
					},
					{
						model: Report,
						attributes: { exclude: ['reported_user', 'post_id', 'question_id', 'answer_id', 'updatedAt'] },
						order: [["createdAt", 'DESC']],
					}
				]
			})
			if (answer) res.json(answer);
			else {
				try {
					throw new TypeError('ERROR 500: La respuesta no fue encontrada en la base de datos (ID no existe).')
				} catch (err) {
					next(err);
				};
			};
		} catch (err) {
			next(err);
		};
	} else {
		try {
			throw new TypeError('ERROR 404: ID inválido (ID no es un tipo INTEGER válido).') // automaticamente rechaza un error, sin buscar por la DB
		} catch (err) {
			next(err);
		};
	};
};

async function createAnswer(req, res, next) {
	let { question_id, answer } = req.body;
	try {
		let newAnswer = await Answer.create({
			question_id,
			answer
		});
		newAnswer.setQuestion(question_id);
		res.json(newAnswer);
	} catch (err) {
		next(err);
	};
};

async function deleteAnswer(req, res, next) {
	let { idAnswer } = req.params;
	try {
		let existsInDB = await Answer.findByPk(idAnswer);
		if (existsInDB) {
			await Answer.destroy({
				where: {
					id: idAnswer
				}
			});
			return res.json(existsInDB);
		} else {
			throw new Error('ERROR 500: La respuesta no fue encontrada en la base de datos (ID no existe).');
		};
	} catch (err) {
		next(err);
	};
};



module.exports = {
	getAllAnswers,
	getAnswerById,
	createAnswer,
	deleteAnswer
};