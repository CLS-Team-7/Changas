const { Op } = require("sequelize")
const axios = require('axios').default;
const { User, Post, Order, Category, Specialty, Question, Answer, Report, Review } = require("../db.js");

async function getAllUser(_req, res, next) { //http://localhost:3001/user --> TODA ESTA INFO DEBERIA VERLA EL ADMIN (ver si conviene una route /admin)
	try {
		let users = await User.findAll({
			include: [
				{
					model: Order,
				},
				{
					model: Report,
				},
				{
					model: Review, // TAMBIEN DEBERIA REPORTARSE LOS
				},
				{
					model: Question, // las que el hizo a otros posts
				},
				// {
				// 	model: Answer,
				// },
				{
					model: Post,
					attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
					include: [
						{
							model: Category,
							attributes: ["id", "title"]
						},
						{
							model: Specialty,
							attributes: ["id", "title"]
						},
						{
							model: Report // VER SI ES PERTINENTE TRAER ESTO ACA
						},
						{
							model: Question,
							include: [
								// {
								// 	model: Report
								// },
								{
									model: Answer,
									include: {
										model: Report
									}
								}
							]
						},
					]
				}
			]
		});
		res.json(users);
	} catch (err) {
		next(err);
	};
};

async function getUserById(req, res, next) {
	let { idUser } = req.params;
	if (idUser && idUser.length === 36) { // 36 es la length del UUID /// TODA ESTA INFO DEBERIA VERLA SOLO EL ADMIN
		try {
			let result = await User.findOne({
				where: {
					id: idUser
				},
				include: [
					{
						model: Order,
					},
					{
						model: Report,
					},
					{
						model: Review,
					},
					{
						model: Question // preguntas que el hizo a otros posts
					},
					// {
					// 	model: Answer, // son las que el da en sus posts
					// },
					{
						model: Post,
						attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
						include: [
							{
								model: Category,
								attributes: ["id", "title"]
							},
							{
								model: Specialty,
								attributes: ["id", "title"]
							},
							{
								model: Report // VER SI ES PERTINENTE TRAER ESTO ACA
							},
							{
								model: Question, // preguntas que le hicieron a esos posts
								include: [
									{
										model: Report
									},
									{
										model: Answer, // respuestas que hizo a esas preguntas
										include: {
											model: Report
										}
									}
								]
							},
						]
					}
				]
			});
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
};


// async function getFavUsers(req, res, next) {
// 	// a desarrollar para demo 1?
// };

// async function getMyPosts(req, res, next) {
// 	// a desarrollar para demo 1?
// };

async function createUser(req, res, next) {
	let { given_name, family_name, sub, age, ID_Passport, address, phoneNumber, email, summary, picture, score, jobsDone, isVaccinated, isAdmin } = req.body;

	// hacer un if donde si el email es "adminuser@admin.com", el isAdmin = true y isDataComplete = true

	try {
		let [newUser, isCreated] = await User.findOrCreate({
			where: {
				sub,
				given_name,
				family_name,
				age,
				ID_Passport,
				address,
				phoneNumber,
				email,
				email_verified,
				summary,
				picture,
				score,
				jobsDone,
				isVaccinated,
				isAdmin,
			},
			include: [
				{
					model: Order,
				},
				{
					model: Report,
				},
				{
					model: Review, // TAMBIEN DEBERIA REPORTARSE LOS
				},
				{
					model: Question, // las que el hizo a otros posts
				},
				// {
				// 	model: Answer,
				// },
				{
					model: Post,
					attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
					include: [
						{
							model: Category,
							attributes: ["id", "title"]
						},
						{
							model: Specialty,
							attributes: ["id", "title"]
						},
						{
							model: Report // VER SI ES PERTINENTE TRAER ESTO ACA
						},
						{
							model: Question,
							include: [
								// {
								// 	model: Report
								// },
								{
									model: Answer,
									include: {
										model: Report
									}
								}
							]
						},
					]
				}
			]
		});
		return res.json(newUser);
	} catch (err) {
		next(err);
	};
};

async function updateUser(req, res, next) {
	let { idUser } = req.params;
	let changes = req.body;
	// contemplar el caso de hacer un if completo si isDataComplete viene en false, o directamente poner siempre en isDataComplete en true, venga lo que venga.
	// habria que en tal caso manipular lo que viene por req.body y hacer desctructuring.
	try {
		await User.update(changes, {
			where: {
				id: idUser
			}
		});
		let updatedUser = await User.findOne({ // await User.findByPk(idUser);
			where: {
				id: idUser
			},
			// include: {
			// 	model: Post,
			// 	attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
			// 	include: [
			// 		{
			// 			model: Category,
			// 			attributes: ["id", "title"]
			// 		},
			// 		{
			// 			model: Specialty,
			// 			attributes: ["id", "title"]
			// 		}
			// 	]
			// }
		});
		res.json(updatedUser); // se envia el user modificado al front
	} catch (err) {
		next(err);
	};
};

async function deleteUser(req, res, next) {
	let { idUser } = req.params;
	try {
		let existsInDB = await User.findByPk(idUser); // primero busca si existe el user en la DB. Si existe lo guarda en esta variable 
		if (existsInDB) {
			await User.destroy({ // de existir, lo destruye
				where: {
					id: idUser
				},
				// include: {
				// 	model: Post,
				// 	attributes: { exclude: ["user_id"], "category_id", "specialty_id" },
				// 	include: [
				// 		{
				// 			model: Category,
				// 			attributes: ["id", "title"]
				// 		},
				// 		{
				// 			model: Specialty,
				// 			attributes: ["id", "title"]
				// 		}
				// 	]
				// }
			});
			return res.json(existsInDB); // devuelve el post eliminado como el metodo pop()
		} else {
			throw new Error('ERROR 500: El usuario no fue encontrado en la base de datos (UUID no existe).');
		}
	} catch (err) {
		next(err);
	};
};


module.exports = {
	getAllUser,
	getUserById,
	createUser,
	updateUser,
	deleteUser
};