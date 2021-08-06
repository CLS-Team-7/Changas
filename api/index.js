const server = require('./src/app.js');
const { conn, Post, User, Order, Category, Specialty } = require('./src/db.js');
const postsDB = require('./src/seeders/posts-demo');
const usersDB = require('./src/seeders/users-demo');
const categoriesDB = require('./src/seeders/categories-demo');
const specialtiesDB = require('./src/seeders/specialties-demo');
const db = require('./src/db.js');
const cookieParser = require('cookie-parser');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    // ----*** INSTRUCCIONES para levantar la DB *** ----

    // Dejo estos instrucciones acá porque aún no le encontré la vuelta a este tema y necesitaría una mano, pero quiero que puedan usar la db con lo que funciona hasta ahora.
    // La idea es no tener que hacer nada de estos pasos, sólo con npm start arrancar a andar sin problemas:

    // - La primera vez que levanten la DB, sólo tengan COMENTADO el map de postsDB (lineas 71 a 87). En postgres, van a poder ver los UUID de la tabla users. 
    // - Luego MATAR el servidor. !!!
    // - Con esos UUID, ir a al archivo posts-demo.js en la carpeta /seeders y ponerlos en los user_id de cada objeto dentro del array postsDB, como más les guste.
    // - Una vez hechos los cambios, guardar el archivo con el servidor MUERTO todo el tiempo.
    // - Después hay que comentar los maps de usersDB, categoriesDB y specialtiesDB de este archivo, y descomentar el map de postsDB.
    // - Guardar los cambios y después levantar el servidor.

    //  Listo! Todos los datos de los seeders estan en la DB, las rutas funcionan para crear, editar y borrar users y posts desde el front.


    // -------------------********-----------------------

    // await categoriesDB.map(category => {
    //   Category.create({
    //     id: category.id,
    //     title: category.title
    //   });
    // });
    // console.log('Precarga de categories en DB OK!')

    // await specialtiesDB.map(specialty => {
    //   Specialty.create({
    //     id: specialty.id,
    //     category_id: specialty.category_id,
    //     title: specialty.title
    //   });
    // });
    // console.log('Precarga de specialties en DB OK!')

    // await usersDB.map(user => {
    //   User.create({
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     age: user.age,
    //     ID_Passport: user.ID_Passport,
    //     address: user.address,
    //     phoneNumber: user.phoneNumber,
    //     email: user.email,
    //     summary: user.summary,
    //     photo: user.photo || 'https://ojodepezfotografos.com/wp-content/uploads/2019/03/SESION-DE-FOTOS-PERFIL-PROFESIONAL-10.jpg',
    //     score: user.score,
    //     jobDone: user.jobDone,
    //     isVaccinated: user.isVaccinated,
    //     isNew: user.isNew,
    //     isAdmin: user.isAdmin,
    //     isActive: user.isActive,
    //   });
    // });
    // console.log('Precarga de users en DB OK!');


    // await postsDB.map(post => {
    //   Post.create({
    //     user_id: post.user_id,
    //     typePost: post.typePost,
    //     title: post.title,
    //     description: post.description,
    //     image: post.image || 'https://st.depositphotos.com/1158045/2262/i/600/depositphotos_22620531-stock-photo-technician-repairing-an-hot-water.jpg',
    //     priceRange: post.priceRange,
    //     timeRange: post.timeRange,
    //     category_id: post.category_id,
    //     specialty_id: post.specialty_id,
    //     paymentMethods: post.paymentMethods,
    //     workingArea: post.workingArea,
    //     isActive: post.isActive
    //   });
    // });
    // console.log('Precarga de posts en DB OK!')

  });
});
