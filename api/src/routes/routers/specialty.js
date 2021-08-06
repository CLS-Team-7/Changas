const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Category, Specialty } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


router.get('/', async (req, res, next) => { //http://localhost:3001/specialty --> 
	try {
		let specialties = await Specialty.findAll({
			attributes: ["id", "title"],
			include: {
				model: Category,
				attributes: ["id", "title"]
			}
		});
		res.json(specialties);
	} catch (err) {
		next(err);
	};
});

router.get('/:idSpecialty', async (req, res, next) => {
	let { idSpecialty } = req.params;
	if (idSpecialty && !isNaN(idSpecialty) && parseInt(idSpecialty) > 0) { // chequea que el id sea exista, sea un numero, y sea mayor a 0
		try {
			let result = await Specialty.findOne({
				where: {
					id: idSpecialty
				},
				attributes: ["id", "title"],
				include: {
					model: Category,
					attributes: ["id", "title"]
				}
			});
			if (result) res.json(result);
			else throw new Error('ERROR 500: El puesto buscado no fue encontrado en la base de datos (ID no existe)');
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
	let { category_id, title } = req.body;
	try {
		let newSpecialty = await Specialty.create({
			category_id,
			title
		});
		newSpecialty.setCategory(category_id);
		res.json(newSpecialty);
	} catch (err) {
		next(err);
	};
});

router.put('/:idSpecialty', async (req, res, next) => {
	let { idSpecialty } = req.params;
	let changes = req.body;
	try {
		await Specialty.update(changes, {
			where: {
				id: idSpecialty
			}
		});
		let updatedSpecialty = await Specialty.findByPk(idSpecialty);
		if (changes.category_id) updatedSpecialty.setCategory(changes.category_id);
		res.json(updatedSpecialty);
	} catch (err) {
		next(err);
	};
});

router.delete('/:idSpecialty', async (req, res, next) => {
	let { idSpecialty } = req.params;
	try {
		let existsInDB = await Specialty.findByPk(idSpecialty);
		if (existsInDB) {
			await Specialty.destroy({
				where: {
					id: idSpecialty
				}
			});
			return res.json(existsInDB);
		} else {
			throw new Error('ERROR 500: El puesto no fue encontrado en la base de datos (ID no existe).');
		}
	} catch (err) {
		next(err);
	};
});


module.exports = router;