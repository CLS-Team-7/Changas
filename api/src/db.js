require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
      database: DB_NAME,
      dialect: "postgres",
      host: DB_HOST,
      port: 5432,
      username: DB_USER,
      password: DB_PASSWORD,
      pool: {
        max: 3,
        min: 1,
        idle: 10000,
      },
      dialectOptions: {
        ssl: {
          require: true,
          // Ref.: https://github.com/brianc/node-postgres/issues/2009
          rejectUnauthorized: false,
        },
        keepAlive: true,
      },
      ssl: true,
    })
    : new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
      { logging: false, native: false }
    );

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
// VER EL TEMA DE LOS ARCHIVOS ADJUNTOS CON SEQUELIZE-FILE para evidence y picture

User.hasMany(Post, { foreignKey: 'user_id' });  // un usuario tiene muchos posts
Post.belongsTo(User, { foreignKey: 'user_id' }); // un post pertenece a un unico usuario (quien CREA el post)

User.hasMany(Order, { foreignKey: 'user_id' }); // un usuario tiene muchas ordenes
Order.belongsTo(User, { foreignKey: 'user_id' }); // una orden pertenece a un unico usuario (quien CREA la orden)

User.hasMany(Question, { foreignKey: 'user_id' }); // un usuario puede tener/hacer muchas preguntas (a posteos)
Question.belongsTo(User, { foreignKey: 'user_id' }) // una pregunta pertenece a un unico usuario

User.hasMany(Review, { foreignKey: 'user_id' }); // un usuario puede realizar varias reviews **REVISAR FOREIGN_KEY
Review.belongsTo(User, { foreignKey: 'user_id' }) // un review pertenece a un unico usuario **REVISAR FOREIGN_KEY

User.hasMany(Report, { foreignKey: 'reported_user' }); // esta es la que vale, porque importa saber si un usuario FUE denunciado, no si hizo una denuncia (alguien lo denuncio)
Report.belongsTo(User, { foreignKey: 'reported_user' });

// Asociaciones de Post (one-to-many)
Post.hasMany(Review, { foreignKey: 'post_id', constraints: false }); // un post tiene muchas reviews **REVISAR FOREIGN_KEY
Review.belongsTo(Post, { foreignKey: 'post_id', constraints: false }); // un review pertenece a un solo post **REVISAR FOREIGN_KEY

Post.hasMany(Order, { foreignKey: 'post_id' }); // un post puede tener muchas ordenes (muchos usuarios quieren contratar ese post)
Order.belongsTo(Post, { foreignKey: 'post_id' }); // una orden pertenece a un unico post

Post.hasMany(Question, { foreignKey: 'post_id' }); // un post puede tener muchas preguntas
Question.belongsTo(Post, { foreignKey: 'post_id' }); // una pregunta puede pertencer a un unico post

Post.hasMany(Report, { foreignKey: 'post_id' }); // un post puede tener muchos reports (varios usuarios lo denuncian)
Report.belongsTo(Post, { foreignKey: 'post_id' }); // un report puede apuntar a un unico post

// Asociaciones Category y Specialty con Post (one-to-many)
Category.hasMany(Post, { foreignKey: 'category_id' }); // una categoria tiene muchos posts / puede estar en muchos posts
Post.belongsTo(Category, { foreignKey: 'category_id' }); // un post puede tener una unica categoria (categoria 'Transporte y mudanzas')

Specialty.hasMany(Post, { foreignKey: 'specialty_id' }); // una especialidad tiene muchos posts / puede estar en muchos posts
Post.belongsTo(Specialty, { foreignKey: 'specialty_id' }); // un post puede tener una unica especialidad (especialidad 'Fletero')

Category.hasMany(Specialty, { foreignKey: 'category_id' }); // una categoria puede tener muchas especialidades (categoria 'Construccion' tiene especialidades 'albañil, capataz, etc')
Specialty.belongsTo(Category, { foreignKey: 'category_id' }); // una especialidad puede tener una unica categoria

//  Asociaciones Question, Answer (propias) y con Report.
//******* VER PROBLEMA CON LAS FK, question_id tiraba error de constraint por la FK, sin el atributo en el modelo no tira el error.
Question.hasMany(Report, { foreignKey: 'question_id' }); // una question puede tener muchos reports (la denuncian varios)
Report.belongsTo(Question, { foreignKey: 'question_id' }); // un report pertenece/apunta a una unica question

Answer.hasMany(Report, { foreignKey: 'answer_id' }); // una answer puede tener muchos reports (la denuncian varios)
Report.belongsTo(Answer, { foreignKey: 'answer_id' }); // un report pertenece/apunta a una unica answer


//************ aca esta el conflicto*/

// en principio, la relacion es hasOne, pero con hasMany funciona y no rompe. Es util de todas formas que la relacion sea hasMany

Question.hasMany(Answer, { foreignKey: "question_id", constraints: false }); // una pregunta puede tener una respuesta
Answer.belongsTo(Question, { foreignKey: "question_id", constraints: false }); // una respuesta puede tener una pregunta


//************ */


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
