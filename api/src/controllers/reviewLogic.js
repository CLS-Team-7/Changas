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
					review_id: idReview
				},
				attributes: ["review_id", "rating", "description"],
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

async function createReview (req, res, next) {
	let { rating, description } = req.body;
	try {
		let newReview = await Review.create({
			rating,
            description
		});
		res.json(newReview);
	} catch (err) {
		next(err);
	};
};

async function updateReview (req, res, next) {
	let { idReview } = req.params;
	let {rating,description} = req.body;
	try {
		await Review.update(
            {
                rating:rating,
                description:description
            }, {
			where: {
				review_id: idReview
			}
		});
		res.status(200).send('Review modificado');
	} catch (err) {
		next(err);
	};
};

async function deleteReview (req,res) {
    let { idReview } = req.params;
    try{
    	Review.destroy({
        	where:{
            	review_id: idReview
        	}
    	});
    	res.status(200).send('Review eliminado')
	}catch (err) {
    	next(err);
	}
};

module.exports = {
	getAllReviews,
    getReviewById,
    createReview,
    updateReview,
	deleteReview
};