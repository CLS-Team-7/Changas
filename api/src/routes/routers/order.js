const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Answer, Question, Review } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();



router.get('/', async (req, res, next) => {
	try {
		let orders = await Order.findAll({
			// attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
			include: {
				model: User,
				attributes: ["id", "given_name", "family_name", "fullName", "picture"],
			}
		});
		res.json(orders);
	} catch (err) {
		next(err);
	};
});



router.get('/:idOrder', async (req, res, next) => {
	let { idOrder } = req.params;
	if (idOrder) { // ver que validacion puedo hacer aca
		try {
			let result = await Order.findOne({
				where: {
					id: idOrder,
				},
				// attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
				include: {
					model: User,
					attributes: ["id", "given_name", "family_name", "fullName"],
				}
			});
			if (result) res.json(result);
			else
				throw new Error(
					"ERROR 500: La orden no fue encontrada en la base de datos (UUID no existe)."
				);
		} catch (err) {
			next(err);
		};
	};
	// if (idPost && idPost.length !== 36) {
	// 	try {
	// 		throw new TypeError(
	// 			"ERROR 404: ID inválido (ID no es un tipo XXX válido)."
	// 		); // automaticamente rechaza un error, sin buscar por la DB
	// 	} catch (err) {
	// 		next(err);
	// 	}
	// };
});

router.post('/', async (req, res, next) => { // logica con checkout

});

router.get('/success', async (req, res, next) => {

});

module.exports = router;