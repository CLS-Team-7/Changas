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

const { User, Post, Order, Category, Specialty } = sequelize.models;

User.hasMany(Post);  // un usuario tiene muchos posts
Post.belongsTo(User); // un post pertenece a un unico usuario (quien CREA el post)

User.hasMany(Order); // un usuario tiene muchas ordenes
Order.belongsTo(User); // una orden pertenece a un unico usuario (quien CREA la orden)

Post.hasMany(Order); // un post tiene muchas ordenes (muchos usuarios quieren contratar ese post)
Order.belongsTo(Post); // una orden pertenece a un unico post

Category.hasMany(Post); // una categoria tiene muchos posts / puede estar en muchos posts
Post.belongsTo(Category); // un post puede tener una unica categoria (categoria 'Transporte y mudanzas')

Specialty.hasMany(Post); // una especialidad tiene muchos posts / puede estar en muchos posts
Post.belongsTo(Specialty); // un post puede tener una unica especialidad (especialidad 'Fletero')

Category.hasMany(Specialty); // una categoria puede tener muchas especialidades (categoria 'Construccion' tiene especialidades 'albañil, capataz, etc')
Specialty.belongsTo(Category) // una especialidad puede tener una unica categoria



module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
