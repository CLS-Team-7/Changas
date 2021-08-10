require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Reading files from Models folder, require then add into the modelDefiners array
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inject Sequelize connection to models
modelDefiners.forEach(model => model(sequelize));
// Capitalize model names
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Post, Order, Category, Specialty, Review, Report, Question, Answer } = sequelize.models;

// Asociaciones de User (todas one-to-many)

User.hasMany(Post, { foreignKey: 'user_id' });  // un usuario tiene muchos posts
Post.belongsTo(User, { foreignKey: 'user_id' }); // un post pertenece a un unico usuario (quien CREA el post)

User.hasMany(Order, { foreignKey: 'user_id' }); // un usuario tiene muchas ordenes
Order.belongsTo(User, { foreignKey: 'user_id' }); // una orden pertenece a un unico usuario (quien CREA la orden)

User.hasMany(Question, { foreignKey: 'user_id' }); // un usuario puede tener/hacer muchas preguntas (a posteos)
Question.belongsTo(User, { foreignKey: 'user_id' }) // una pregunta pertenece a un unico usuario

// EN PRINCIPIO ESTA BIEN PERO SERIA REDUNDANTE, post tiene ya el id de este usuario que responde
User.hasMany(Answer, { foreignKey: 'user_id' }); // un usuario que publico un post puede tener/haber dado muchas respuestas 
Answer.belongsTo(User, { foreignKey: 'user_id' }) // una respueta pertenece/fue dada a un unico usuario 

User.hasMany(Review, { foreignKey: 'user_id' }); // un usuario puede tener/recibir muchas reviews
Review.belongsTo(User, { foreignKey: 'user_id' }); // una review pertenece a un unico user

// VER EL TEMA DE LOS ARCHIVOS ADJUNTOS CON SEQUELIZE-FILE Y COMO GUARDAR EL ID DEL USUARIO DENUNCIADO.
User.hasMany(Report, { foreignKey: 'user_id' }); // un usuario puede HACER muchos reportes de abuso/incumplimiento/denuncias
Report.belongsTo(User, { foreignKey: 'user_id' }); // un report pertenece/fue hecho por un unico user

// Asociaciones de Post (one-to-many)

Post.hasMany(Order, { foreignKey: 'post_id' }); // un post puede tener muchas ordenes (muchos usuarios quieren contratar ese post)
Order.belongsTo(Post, { foreignKey: 'post_id' }); // una orden pertenece a un unico post

Post.hasMany(Question, { foreignKey: 'post_id' }); // un post puede tener muchas preguntas
Question.belongsTo(Post, { foreignKey: 'post_id' }); // una pregunta puede pertencer a un unico post

Post.hasMany(Report, { foreignKey: 'post_id' }); // un post puede tener muchos reports (varios usuarios lo denuncian)
Report.belongsTo(Post, { foreignKey: 'post_id' });

// Asociaciones Category y Specialty con Post (one-to-many)

Category.hasMany(Post, { foreignKey: 'category_id' }); // una categoria tiene muchos posts / puede estar en muchos posts
Post.belongsTo(Category, { foreignKey: 'category_id' }); // un post puede tener una unica categoria (categoria 'Transporte y mudanzas')

Specialty.hasMany(Post, { foreignKey: 'specialty_id' }); // una especialidad tiene muchos posts / puede estar en muchos posts
Post.belongsTo(Specialty, { foreignKey: 'specialty_id' }); // un post puede tener una unica especialidad (especialidad 'Fletero')

// Asociaciones Category (one-to-many)

Category.hasMany(Specialty, { foreignKey: 'category_id' }); // una categoria puede tener muchas especialidades (categoria 'Construccion' tiene especialidades 'albañil, capataz, etc')
Specialty.belongsTo(Category, { foreignKey: 'category_id' }) // una especialidad puede tener una unica categoria

//  Asociaciones Question, Answer (propias)

Question.hasOne(Answer, { foreignKey: 'question_id' }); // una pregunta puede tener una respuesta
Answer.belongsTo(Question, { foreignKey: 'question_id' }); // una respuesta puede tener una pregunta

// Asociaciones Order

Order.hasOne(Review, { foreignKey: 'order_id' }); // una order puede tener una unica review (le da su id a review para que esta sea valida)
Review.belongsTo(Order, { foreignKey: 'order_id' }); // una review pertenece a una unica order (su id es lo que la valida a una contratacion efectiva)

Order.hasOne(Report, { foreignKey: 'order_id' }); // una order puede tener un unico report (quien quiere contratar - quien genero la order - puede reportar al usuario por cualquier abuso/incumpliento)
Report.belongsTo(Order, { foreignKey: 'order_id' }); // un report puede pertenecer a una unica order (es un unico usuario quien genera la order, y es el exclusivamente que puede hacer un report)



module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
