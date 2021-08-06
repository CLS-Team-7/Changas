const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Category, Specialty } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();

router.get('/', async (req, res, next) => { //http://localhost:3001/category --> 
	try {
		let categories = await Category.findAll({
			attributes: ["id", "title"],
			include: {
				model: Specialty,
				attributes: ["id", "title"]
			}
		});
		res.json(categories);
	} catch (err) {
		next(err);
	};
});


router.get('/:idCategory', async (req, res, next) => {
	let { idCategory } = req.params;
	if (idCategory && !isNaN(idCategory) && parseInt(idCategory) > 0) { // chequea que el id sea exista, sea un numero, y sea mayor a 0
		try {
			let result = await Category.findOne({
				where: {
					id: idCategory
				},
				attributes: ["id", "title"],
				include: {
					model: Specialty,
					attributes: ["id", "title"]
				}
			});
			if (result) res.json(result);
			else throw new Error('ERROR 500: La categoria/rubro buscado no fue encontrado en la base de datos (ID no existe)');
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
});


router.post('/', async (req, res, next) => {
	let { title } = req.body;
	try {
		let newCategory = await Category.create({
			title
		});
		res.json(newCategory);
	} catch (err) {
		next(err);
	};
});

router.put('/:idCategory', async (req, res, next) => {
	let { idCategory } = req.params;
	let changes = req.body;
	try {
		await Category.update(changes, {
			where: {
				id: idCategory
			}
		});
		let updatedCategory = await Category.findOne({
			where: {
				id: idCategory
			},
			// attributes: ["id", "title"],
			// include: {
			// 	model: Specialty,
			// 	attributes: ["id", "title"]
			// }
		});
		res.json(updatedCategory);
	} catch (err) {
		next(err);
	};
});

router.delete('/:idCategory', async (req, res, next) => {
	let { idCategory } = req.params;
	try {
		let existsInDB = await Category.findByPk(idCategory);
		if (existsInDB) {
			await Category.destroy({
				where: {
					id: idCategory
				},
				// attributes: ["id", "title"],
				// include: {
				// 	model: Specialty,
				// 	attributes: ["id", "title"]
				// }
			});
			return res.json(existsInDB);
		} else {
			throw new Error('ERROR 500: La cateogría/rubro no fue encontrado en la base de datos (ID no existe).');
		}
	} catch (err) {
		next(err);
	};
});


module.exports = router;