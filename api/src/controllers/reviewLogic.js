const { Op } = require("sequelize")
const axios = require('axios').default;
const { User, Post, Order, Category, Specialty, Review } = require('../db.js');

async function getAllReviews (_req, res, next) { //http://localhost:3001/review --> 
    try {
		let reviews = await Review.findAll({
            attributes: { exclude: ["user_id"] },
      include: [
        {
          model: User,
          attributes: ["id", "given_name", "family_name", "fullName", "picture"],
        }, 
     ], 
    });
    res.json(reviews);
} catch (err) {
  next(err);
    }  
}

async function getReviewById (req, res, next) {
	let { idReview } = req.params;
	if (idReview && !isNaN(idReview) && parseInt(idReview) > 0) { // chequea que el id sea exista, sea un numero, y sea mayor a 0
		try {
			let result = await Review.findOne({
				where: {
					id: idReview
				},
				attributes: ["review_id", "rating", "decription"],
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

module.exports = {
	getAllReviews,
    getReviewById,
};