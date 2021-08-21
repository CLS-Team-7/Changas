const { Op } = require("sequelize");
const axios = require("axios").default;
const { User, Post, Order, Category, Specialty, Question, Answer, Report, Review } = require("../db.js");

async function getAllQuestions(req, res, next) {
	try {
		let questions = await Question.findAll({
			attributes: { exclude: ["updatedAt"] },
			order: [["createdAt", 'DESC']],
			include: [{
				model: Answer,
				attributes: { exclude: ["updatedAt", "question_id"] },
				order: [["createdAt", 'ASC']],
			},
			{
				model: User,
				attributes: ["given_name"]
			},
			{
				model: Post,
				attributes: ["title", "id"],
				include: {
					model: User,
					attributes: ["id"]
				}
			},
			{
				model: Report,
				attributes: { exclude: ['reported_user', 'post_id', 'question_id', 'answer_id', 'updatedAt'] },
				order: [["createdAt", 'DESC']],
			}
			]
		});
		res.json(questions);
	} catch (err) {
		next(err);
	};
};


async function getQuestionById(req, res, next) {
	let { idQuestion } = req.params;
	if (idQuestion && !isNaN(idQuestion) && parseInt(idQuestion) > 0) {
		try {
			let question = await Question.findOne({
				where: {
					id: idQuestion
				},
				attributes: { exclude: ["updatedAt"] },
				include: [{
					model: Answer,
					attributes: { exclude: ["updatedAt", "question_id"] },
					order: [["createdAt", 'ASC']],
				},
				{
					model: User,
					attributes: ["given_name"]
				},
				{
					model: Post,
					attributes: ["title", "id"],
					include: {
						model: User,
						attributes: ["id"]
					}
				},
				{
					model: Report,
					attributes: { exclude: ['reported_user', 'post_id', 'question_id', 'answer_id', 'updatedAt'] },
					order: [["createdAt", 'DESC']],
				}
				]
			})
			if (question) res.json(question);
			else {
				try {
					throw new TypeError('ERROR 500: La pregunta no fue encontrada en la base de datos (ID no existe).')
				} catch (err) {
					next(err);
				};
			};
		} catch (err) {
			next(err);
		};
	} else {
		try {
			throw new TypeError('ERROR 404: ID inválido (ID no es un tipo INTEGER válido).')
		} catch (err) {
			next(err);
		};
	};
}


async function createQuestion(req, res, next) {
	let { post_id, user_id, question } = req.body;
	try {
		let newQuestion = await Question.create({
			post_id,
			user_id,
			question
		});
		newQuestion.setPost(post_id);
		newQuestion.setUser(user_id);
		res.json(newQuestion);
	} catch (err) {
		next(err);
	};
}


async function deleteQuestion(req, res, next) {
	let { idQuestion } = req.params;
	try {
		let existsInDB = await Question.findByPk(idQuestion);
		if (existsInDB) {
			await Question.destroy({
				where: {
					id: idQuestion
				}
			});
			return res.json(existsInDB);
		} else {
			throw new Error('ERROR 500: La pregunta no fue encontrada en la base de datos (ID no existe).');
		};
	} catch (err) {
		next(err);
	};
}

module.exports = {
	getAllQuestions,
	getQuestionById,
	createQuestion,
	deleteQuestion
};