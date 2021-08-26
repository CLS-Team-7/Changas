const { Op } = require("sequelize")
const axios = require('axios').default;
const { User, Post, Order, Category, Specialty, Review } = require('../db.js');

async function getAllReviews(_req, res, next) { //http://localhost:3001/review -->
	try {
		let reviews = await Review.findAll({
			attributes: { exclude: ["user_id", "post_id", "updatedAt"] },
			order: [["createdAt", 'DESC']],
			include: [
				{
					model: User,
					attributes: ['id', 'given_name', 'family_name', 'fullName']
				}, {
					model: Post,
					attributes: ['id', 'title']
				}
			]
		});
		res.json(reviews);
	} catch (err) {
		next(err);
	}
}

async function getReviewById(req, res, next) { // esta funcion no se usa
	let { idReview } = req.params;
	if (idReview && !isNaN(idReview) && parseInt(idReview) > 0) { // chequea que el id sea exista, sea un numero, y sea mayor a 0
		try {
			let result = await Review.findOne({
				where: {
					id: idReview
				},
				attributes: { exclude: ["user_id", "post_id", "updatedAt"] },
				include: [
					{
						model: User,
						attributes: ['id', 'given_name', 'family_name', 'fullName']
					}, {
						model: Post,
						attributes: ['id', 'title']
					}
				]
			});
			if (result) res.json(result);
			else throw new Error('ERROR 500: El review buscado no fue encontrado en la base de datos (ID no existe)');
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

async function getPostReview(req, res, next) { // el id es el del POST,
	let { idPost } = req.params;
	if (idPost && idPost.length === 36) { // 36 es la length del UUID
		try {
			let result = await Post.findOne({
				where: {
					id: idPost,
				},
				attributes: ["id"],
				include: [
					{
						model: Review,
						attributes: { exclude: ["post_id", "updatedAt"] }
					}
				],
			});
			if (result) res.json(result);
			else
				throw new Error(
					"ERROR 500: La publicación no fue encontrada en la base de datos (UUID no existe)."
				);
		} catch (err) {
			next(err);
		};
	};
	if (idPost && idPost.length !== 36) {
		try {
			throw new TypeError(
				"ERROR 404: ID inválido (ID no es un tipo UUID válido)."
			); // automaticamente rechaza un error, sin buscar por la DB
		} catch (err) {
			next(err);
		}
	};
};

async function createReview(req, res, next) {
	let { rating, description, user_id, post_id } = req.body;
	try {
		let newReview = await Review.create({
			user_id,
			post_id,
			rating,
			description
		});
		res.json(newReview);
	} catch (err) {
		next(err);
	};
};

async function updateReview(req, res, next) {
	let { idReview } = req.params;
	let changes = req.body;
	changes = { ...changes, isValidated: true };
	try {
		await Review.update(changes,
			{
				where: {
					id: idReview
				}
			});
		let updatedReview = await Review.findByPk(idReview);
		res.json(updatedReview);
	} catch (err) {
		next(err);
	};
};

async function deleteReview(req, res) {
	let { idReview } = req.params;
	try {
		Review.destroy({
			where: {
				id: idReview
			}
		});
		res.status(200).send('Review eliminado')
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getAllReviews,
	getReviewById,
	getPostReview,
	createReview,
	updateReview,
	deleteReview,
};