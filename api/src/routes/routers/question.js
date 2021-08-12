const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Answer, Question, Review } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();



router.get('/', async (req, res, next) => { // http://localhost:3001/question
	try {
		let questions = await Question.findAll({
			attributes: { exclude: ["updatedAt"] },
			include: {
				model: Answer,
				attributes: { exclude: ["updatedAt", "question_id"] }
			}
		});
		res.json(questions);
	} catch (err) {
		next(err);
	};
});

router.get('/:idQuestion', async (req, res, next) => {
	let { idQuestion } = req.params;
	if (idQuestion && !isNaN(idQuestion) && parseInt(idQuestion) > 0) {
		try {
			let question = await Question.findOne({
				where: {
					id: idQuestion
				},
				attributes: { exclude: ["updatedAt"] },
				include: {
					model: Answer,
					attributes: { exclude: ["updatedAt", "question_id"] }
				}
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
});

router.post('/', async (req, res, next) => {
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
});

router.delete('/:idQuestion', async (req, res, next) => {
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
});


module.exports = router;