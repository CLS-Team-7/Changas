const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post, Category, Specialty } = require('../../db.js');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


// solo los usuarios registrados pueden crear posts

router.get('/', async (_req, res, next) => { //http://localhost:3001/post --> 
	try {
		let posts = await Post.findAll({
			attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
			include: [
				{
					model: User,
					attributes: ["id", "firstName", "lastName", "fullName"]
				},
				{
					model: Category,
					attributes: ["id", "title"]
				},
				{
					model: Specialty,
					attributes: ["id", "title"]
				}
			]
		});
		res.json(posts);
	} catch (err) {
		next(err);
	};
});

router.get('/search', async (req, res, next) => {
	//Falta validación con caracteres especiales
	let { keyword } = req.query;
	try {
		if (!keyword ){
			throw new Error('ERROR 500: La publicación no fue encontrada en la base de datos.');
		} else {
			const result = await Post.findAll({
			  where: 
				  {
					title: {
					  [Op.iLike]: `%${keyword}%`,
					},
				  },
			  // include: User, 
			});
			if(result.length === 0){
				throw new Error('ERROR 500: La publicación no fue encontrada en la base de datos.');
			} else {
			return res.json(result);
			}
		  }
		} 
		catch (err) {
		next (err);
	}
});

router.get('/:idPost', async (req, res, next) => {
	let { idPost } = req.params;
	if (idPost && idPost.length === 36) { // 36 es la length del UUID
		try {
			let result = await Post.findOne({
				where: {
					id: idPost
				},
				attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
				include: [
					{
						model: User,
						attributes: ["id", "firstName", "lastName", "fullName"]
					},
					{
						model: Category,
						attributes: ["id", "title"]
					},
					{
						model: Specialty,
						attributes: ["id", "title"]
					}
				]
			});
			if (result) res.json(result);
			else throw new Error('ERROR 500: La publicación no fue encontrada en la base de datos (UUID no existe).');
		} catch (err) {
			next(err);
		};
	};
	if (idPost && idPost.length !== 36) {
		try {
			throw new TypeError('ERROR 404: ID inválido (ID no es un tipo UUID válido).') // automaticamente rechaza un error, sin buscar por la DB
		} catch (err) {
			next(err);
		}
	};
}); 

router.post('/', async (req, res, next) => {
	let { user_id, typePost, title, description, image, priceRange, timeRange, category_id, specialty_id, paymentMethods, workingArea } = req.body;
	try {
		let newPost = await Post.create({
			user_id,
			typePost,
			title,
			description,
			image,
			priceRange,
			timeRange,
			category_id,
			specialty_id,
			paymentMethods,
			workingArea
		});
		newPost.setUser(user_id);
		newPost.setCategory(category_id);
		newPost.setSpecialty(specialty_id);
		res.json(newPost);
	} catch (err) {
		next(err);
	};
});

router.put('/:idPost', async (req, res, next) => {
	let { idPost } = req.params;
	let changes = req.body;
	try {
		await Post.update(changes, {
			where: {
				id: idPost
			}
		});
		let updatedPost = await Post.findByPk(idPost);
		if (changes.category_id) updatedPost.setCategory(changes.category_id);
		if (changes.specialty_id) updatedPost.setSpecialty(changes.specialty_id);
		res.json(updatedPost); // se envia el post modificado al front
	} catch (err) {
		next(err);
	};
});

router.delete('/:idPost', async (req, res, next) => {
	let { idPost } = req.params;
	try {
		let existsInDB = await Post.findByPk(idPost); // primero busca si existe el post en la DB. Si existe lo guarda en esta variable 
		if (existsInDB) {
			await Post.destroy({ // de existir, lo destruye
				where: {
					id: idPost
				}
			});
			return res.json(existsInDB); // devuelve el post eliminado como el metodo pop()
		} else {
			throw new Error('ERROR 500: La publicación no fue encontrada en la base de datos (UUID no existe).');
		}
	} catch (err) {
		next(err);
	};
});


module.exports = router;