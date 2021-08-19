const { Op } = require("sequelize");
const axios = require("axios").default;
const { User, Post, Order, Category, Specialty, Question, Answer, Report, Review } = require("../db.js");

async function getAllPosts(_req, res, next) {
  //http://localhost:3001/post -->
  try {
    let posts = await Post.findAll({
      attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
      order: [['pack', 'DESC']],
      include: [
        {
          model: User,
          attributes: ["id", "given_name", "family_name", "fullName", "picture"],
        },
        {
          model: Category,
          attributes: ["id", "title"],
        },
        {
          model: Specialty,
          attributes: ["id", "title"],
        },
        {
          model: Question,
          attributes: { exclude: ["post_id"] },
          include:
          {
            model: Answer,
            attributes: { exclude: ["question_id"] },
          }
        },
        {
          model: Order // ESTO LO DEBERIA VER SOLO EL ADMIN
        },
        {
          model: Report, // ESTO LO DEBERIA VER SOLO EL ADMIN
          attributes: { exclude: ['reported_user', 'post_id', 'question_id', 'answer_id', 'updatedAt'] }
        },
        {
          model: Review,
          attributes: { exclude: ["post_id", "updatedAt"] }
        }
      ],
    });
    res.json(posts);
  } catch (err) {
    next(err);
  };
};

async function getPostByTitle(req, res, next) {
  //Falta validación con caracteres especiales
  let { keyword } = req.query;
  try {
    if (!keyword) {
      throw new Error(
        "ERROR 500: La publicación no fue encontrada en la base de datos."
      );
    } else {
      const result = await Post.findAll({
        where: {
          title: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
        order: [['pack', 'DESC']],
        include: [
          {
            model: User,
            attributes: ["id", "given_name", "family_name", "fullName", "picture"],
          },
          {
            model: Category,
            attributes: ["id", "title"],
          },
          {
            model: Specialty,
            attributes: ["id", "title"],
          },
          {
            model: Question,
            attributes: { exclude: ["post_id"] },
            include:
            {
              model: Answer,
              attributes: { exclude: ["question_id"] },
            }
          },
          {
            model: Order // ESTO LO DEBERIA VER SOLO LOS ADMINS
          },
          {
            model: Report,
            attributes: { exclude: ['reported_user', 'post_id', 'question_id', 'answer_id', 'updatedAt'] }

          },
          {
            model: Review,
            attributes: { exclude: ["post_id", "updatedAt"] }
          }
        ],
      });
      if (result.length === 0) {
        throw new Error(
          "ERROR 500: La publicación no fue encontrada en la base de datos."
        );
      } else {
        return res.json(result);
      };
    };
  } catch (err) {
    next(err);
  };
};

async function getPostById(req, res, next) {
  let { idPost } = req.params;
  if (idPost && idPost.length === 36) { // 36 es la length del UUID
    try {
      let result = await Post.findOne({
        where: {
          id: idPost,
        },
        attributes: { exclude: ["user_id", "category_id", "specialty_id"] },
        include: [
          {
            model: User,
            attributes: ["id", "given_name", "family_name", "fullName", "picture"],
          },
          {
            model: Category,
            attributes: ["id", "title"],
          },
          {
            model: Specialty,
            attributes: ["id", "title"],
          },
          {
            model: Question,
            attributes: { exclude: ["post_id"] },
            include: {
              model: Answer,
              attributes: { exclude: ["question_id"] },
            }
          },
          {
            model: Order // ESTO LO DEBERIA VER SOLO LOS ADMINS
          },
          {
            model: Report,
            attributes: { exclude: ['reported_user', 'post_id', 'question_id', 'answer_id', 'updatedAt'] }
          },
          {
            model: Review,
            attributes: { exclude: ["post_id", "updatedAt"] },
            include: [{
              model: User,
              attributes: ["given_name", "family_name", "fullName"]
            }]
          }
        ],
      });
      if (result) res.json(result);
      else
        throw new Error(
          "ERROR 500: La publicación no fue encontrada en la base de datos (UUID no existe)."
        );
    } catch (err) {
      next(err);
    };
  };
  if (idPost && idPost.length !== 36) {
    try {
      throw new TypeError(
        "ERROR 404: ID inválido (ID no es un tipo UUID válido)."
      ); // automaticamente rechaza un error, sin buscar por la DB
    } catch (err) {
      next(err);
    }
  };
};

async function createPost(req, res, next) {

  // faltaria hacer un update del User donde se actualiza el isNew a false, una vez que crea el primer post
  let {
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
    workingArea,
  } = req.body;
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
      workingArea,
    });
    newPost.setUser(user_id);
    newPost.setCategory(category_id);
    newPost.setSpecialty(specialty_id);
    res.json(newPost);
  } catch (err) {
    next(err);
  };
};

async function updatePost(req, res, next) {
  let { idPost } = req.params;
  let changes = req.body;
  try {
    await Post.update(changes, {
      where: {
        id: idPost,
      },
    });
    let updatedPost = await Post.findByPk(idPost);
    if (changes.category_id) updatedPost.setCategory(changes.category_id);
    if (changes.specialty_id) updatedPost.setSpecialty(changes.specialty_id);
    res.json(updatedPost); // se envia el post modificado al front
  } catch (err) {
    next(err);
  };
};

async function deletePost(req, res, next) {
  let { idPost } = req.params;
  try {
    let existsInDB = await Post.findByPk(idPost); // primero busca si existe el post en la DB. Si existe lo guarda en esta variable
    if (existsInDB) {
      await Post.destroy({
        // de existir, lo destruye
        where: {
          id: idPost,
        },
      });
      return res.json(existsInDB); // devuelve el post eliminado como el metodo pop()
    } else {
      throw new Error(
        "ERROR 500: La publicación no fue encontrada en la base de datos (UUID no existe)."
      );
    };
  } catch (err) {
    next(err);
  };
};

module.exports = {
  getAllPosts,
  getPostByTitle,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
