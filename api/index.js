const server = require('./src/app.js');
const { conn, Post, User, Order, Category, Specialty, Question, Answer, Report, Review, Location } = require('./src/db.js');
const postsDB = require('./src/seeders/posts-demo');
const usersDB = require('./src/seeders/users-demo');
const categoriesDB = require('./src/seeders/categories-demo');
const specialtiesDB = require('./src/seeders/specialties-demo');
const reviewsDB = require('./src/seeders/review-demo');
const answerDB = require('./src/seeders/answers-demo');
const questionsDB = require('./src/seeders/questions-demo')
const ordersDB = require('./src/seeders/orders-demo');
const reportsDB = require('./src/seeders/reports-demo');
const locationsDB = require('./src/seeders/locations-demo')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {

  server.listen(process.env.PORT || 3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    await locationsDB.map(location => {
      Location.create({
        id: location.id,
        name: location.name,
        lat: location.lat,
        lng: location.lng
      });
    });
    console.log('Precarga de locations en DB OK!')

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
        isActive: post.isActive,
        acceptsQuestions: post.acceptsQuestions,
        isPremium: post.isPremium,
        pack: post.pack,
        location_id: post.location_id
      });
    });
    console.log('Precarga de posts en DB OK!');

    await questionsDB.map(question => {
      Question.create({
        id: question.id,
        user_id: question.user_id,
        post_id: question.post_id,
        question: question.question,
        isActive: question.isActive
      });
    });
    console.log('Precarga de questions en DB OK!');

    await answerDB.map(answer => {
      Answer.create({
        id: answer.id,
        question_id: answer.question_id,
        answer: answer.answer,
        isActive: answer.isActive
      });
    });
    console.log('Precarga de answers en DB OK!');

    await reviewsDB.map(review => {
      Review.create({
        id: review.id,
        user_id: review.user_id,
        post_id: review.post_id,
        rating: review.rating,
        description: review.description,
        isValidated: review.isValidated
      });
    });
    console.log('Precarga de reviews en DB OK!');

    await ordersDB.map(order => {
      Order.create({
        id: order.id,
        user_id: order.user_id,
        post_id: order.post_id,
        title: order.title,
        price: order.price,
        quantity: order.quantity
      })
    })
    console.log('Precarga de orders en DB OK!');

    await reportsDB.map(report => {
      Report.create({
        id: report.id,
        reportSubject: report.reportSubject,
        user_id: report.user_id,
        reported_user: report.reported_user,
        post_id: report.post_id,
        question_id: report.question_id,
        answer_id: report.answer_id,
        complaint: report.complaint,
        evidence: report.evidence,
        isSettled: report.isSettled
      })
    })
    console.log('Precarga de reports en DB OK!');


  });
});
