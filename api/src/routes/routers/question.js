const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Answer, Question, Review } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();



router.get('/', async (req, res, next) => { // http://localhost:3001/question
	try {
		let questions = await Question.findAll({
			include: {
				model: Answer
			}
		});
		res.json(questions);
	} catch (err) {
		next(err);
	};
});

router.get('/:idQuestion', async (req, res, next) => {
	let { idQuestion } = req.params;
	if (idQuestion && !isNaN(idQuestion) && parseInt(idQuestion) > 0) { // chequea que el id exista, que sea un numero, y que sea mayor a 0
		try {
			let questions = await Question.findOne({
				where: {
					id: idQuestion
				},
				include: {
					model: Answer
				}
			})
			if (questions) res.json(questions);
			else {
				try {
					throw new TypeError('ERROR 500: La pregunta no fue encontrada en la base de datos (ID no existe).') // automaticamente rechaza un error, sin buscar por la DB
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