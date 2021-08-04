const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


// trae los datos del user, su 'panel de control'

router.get('/', async (req, res, next) => { //http://localhost:3001/user --> 
	try {
		let users = await User.findAll();
		res.json(users);
	} catch (err) {
		next(err)
	};
});

router.get('/:idUser', async (req, res, next) => {
	let { idUser } = req.params;
	if (idUser && idUser.length === 36) { // 36 es la length del UUID
		try {
			let result = await User.findByPk(idUser);
			if (result) res.json(result);
			else throw new Error('ERROR 500: El usuario no fue encontrado en la base de datos (UUID no existe).');
		} catch (err) {
			next(err);
		};
	};
	if (idUser && idUser.length !== 36) {
		try {
			throw new TypeError('ERROR 404: ID inválido (ID no es un tipo UUID válido).')
		} catch (err) {
			next(err);
		}
	};
});

router.post('/', async (req, res, next) => {
	try {
		let { firstName, lastName, age, ID_Passport, address, phoneNumber, email, summary, photo, score, jobDone, isVaccinated, isNew, isAdmin, isActive } = req.body;
		let newUser = await User.create({
			firstName,
			lastName,
			age,
			ID_Passport,
			address,
			phoneNumber,
			email,
			summary,
			photo,
			score,
			jobDone,
			isVaccinated,
			isNew,
			isAdmin,
			isActive
		});
		res.json(newUser)
	} catch (err) {
		next(err);
	};
});

router.get('/favs', async (req, res, next) => {

});

router.get('/myposts', async (req, res, next) => {


});


module.exports = router;