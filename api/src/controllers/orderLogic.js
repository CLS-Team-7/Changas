const { Op } = require("sequelize");
const axios = require("axios").default;
const { User, Post, Order, Category, Specialty, Question, Answer, Report, Review } = require("../db.js");

async function getAllOrders(req, res, next) { // localhost:3001/order
	try {
		let orders = await Order.findAll({
			attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
			include: [
				{
					model: User,
					attributes: ["id", "given_name", "family_name", "fullName",],
				},
				{
					model: Post,
					attributes: ["id", "title", "description"]
				}
			]
		});
		res.json(orders);
	} catch (err) {
		next(err);
	};
}

async function getOrderById(req, res, next) {
	let { idOrder } = req.params;
	if (idOrder && idOrder.length === 36) {
		try {
			let result = await Order.findOne({
				where: {
					id: idOrder,
				},
				attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
				include: [
					{
						model: User,
						attributes: ["id", "given_name", "family_name", "fullName",],
					},
					{
						model: Post,
						attributes: ["id", "title", "description"]
					}
				]
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
	if (idOrder && idOrder.length !== 36) {
		try {
			throw new TypeError(
				"ERROR 404: ID inválido (ID no es un tipo UUID válido)."
			); // automaticamente rechaza un error, sin buscar por la DB
		} catch (err) {
			next(err);
		}
	};
}

async function createOrder(req, res, next) { // logica con checkout
	let { user_id, post_id, title, price } = req.body;
	try {
		let newOrder = await Order.create({
			user_id,
			post_id,
			title,
			price
		})
		newOrder.setUser(user_id);
		newOrder.setPost(post_id);
		res.send(newOrder);
	} catch (err) {
		next(err);
	};
};

async function updateOrder(req, res, next) {
	let { idOrder } = req.params;
	let changes = req.body;
	try {
		await Order.update(changes, {
			where: {
				id: idOrder,
			},
		});
		let updatedOrder = await Order.findOne({
			where: {
				id: idOrder
			}
		});
		return res.json(updatedOrder);
	} catch (err) {
		next(err);
	};
};

async function deleteOrder(req, res, next) {
	let { idOrder } = req.params;
	try {
		let existsInDB = await Order.findByPk(idOrder);
		if (existsInDB) {
			await Order.destroy({
				where: {
					id: idOrder,
				},
			});
			return res.json(existsInDB);
		} else {
			throw new Error(
				"ERROR 500: La orden no fue encontrada en la base de datos (UUID no existe)."
			);
		};

	} catch (err) {
		next(err);
	};
};

module.exports = {
	getAllOrders,
	getOrderById,
	createOrder,
	updateOrder,
	deleteOrder,
};