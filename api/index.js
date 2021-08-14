const server = require('./src/app.js');
const { conn, Post, User, Order, Category, Specialty, Question, Answer, Report, Review } = require('./src/db.js');
const postsDB = require('./src/seeders/posts-demo');
const usersDB = require('./src/seeders/users-demo');
const categoriesDB = require('./src/seeders/categories-demo');
const specialtiesDB = require('./src/seeders/specialties-demo');
const answerDB = require('./src/seeders/answers-demo');
const questionsDB = require('./src/seeders/questions-demo')
const ordersDB = require('./src/seeders/orders-demo');
// const reportsDB = require('./src/seeders/reports-demo');
// const reviewsDB = require('./src/seeders/reviews-demo');
const db = require('./src/db.js');
const cookieParser = require('cookie-parser');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    await categoriesDB.map(category => {
      Category.create({
        id: category.id,
        title: category.title
      });
    });
    console.log('Precarga de categories en DB OK!')

    await specialtiesDB.map(specialty => {
      Specialty.create({
        id: specialty.id,
        category_id: specialty.category_id,
        title: specialty.title
      });
    });
    console.log('Precarga de specialties en DB OK!')

    await usersDB.map(user => {
      User.create({
        id: user.id,
        given_name: user.given_name,
        family_name: user.family_name,
        age: user.age,
        ID_Passport: user.ID_Passport,
        address: user.address,
        phoneNumber: user.phoneNumber,
        email: user.email,
        summary: user.summary,
        picture: user.picture || 'https://ojodepezfotografos.com/wp-content/uploads/2019/03/SESION-DE-FOTOS-PERFIL-PROFESIONAL-10.jpg',
        score: user.score,
        jobsDone: user.jobsDone,
        isVaccinated: user.isVaccinated,
        isNew: user.isNew,
        isAdmin: user.isAdmin,
        isActive: user.isActive,
      });
    });
    console.log('Precarga de users en DB OK!');

    await postsDB.map(post => {
      Post.create({
        id: post.id,
        user_id: post.user_id,
        typePost: post.typePost,
        title: post.title,
        description: post.description,
        image: post.image || 'https://www.ucmq.com/wp-content/uploads/dia-del-trabajador-.jpg',
        priceRange: post.priceRange,
        timeRange: post.timeRange,
        category_id: post.category_id,
        specialty_id: post.specialty_id,
        paymentMethods: post.paymentMethods,
        workingArea: post.workingArea,
        isActive: post.isActive
      });
    });
    console.log('Precarga de posts en DB OK!');

    await questionsDB.map(question => {
      Question.create({
        id: question.id,
        post_id: question.post_id,
        user_id: question.user_id,
        question: question.question
      });
    });
    console.log('Precarga de questions en DB OK!');

    await answerDB.map(answer => {
      Answer.create({
        id: answer.id,
        question_id: answer.question_id,
        answer: answer.answer
      });
    });
    console.log('Precarga de answers en DB OK!')

    await ordersDB.map(order => {
      Order.create({
        id: order.id,
        user_id: order.user,
        post_id: order.post,
        option: order.option,
        price: order.price,
        quantity: order.quantity
      })
    })
  });
});
