const { Router } = require('express');
const axios = require('axios');
const { User, Order, Post } = require('../../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


// solo los usuarios registrados pueden crear posts

router.get('/', async (req, res, next) => { //http://localhost:3001/post --> 
	try {
		let posts = await Post.findAll();
		res.json(posts);
	} catch (err) {
		next(err)
	};
});

// router.get('/:idPost', async (req, res, next) => {

// });

router.post('/', async (req, res, next) => {
	try {
		let { typePost, title, description, image, priceRange, timeRange, category, specialty, paymentMethods, workingArea, isActive } = req.body;
		let newPost = await Post.create({
			typePost,
			title,
			description,
			image,
			priceRange,
			timeRange,
			category,
			specialty,
			paymentMethods,
			workingArea,
			isActive
		});
		res.json(newPost)
	} catch (err) {
		next(err);
	};
});




module.exports = router;