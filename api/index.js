const server = require('./src/app.js');
const { conn, Post, User, Order } = require('./src/db.js');
const postsDB = require('./src/seeders/posts-demo');
const usersDB = require('./src/seeders/users-demo');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    postsDB.map(post => {
      Post.create({
        typePost: post.typePost,
        title: post.title,
        description: post.description,
        image: post.image || 'https://st.depositphotos.com/1158045/2262/i/600/depositphotos_22620531-stock-photo-technician-repairing-an-hot-water.jpg',
        princeRange: post.princeRange,
        timeRange: post.timeRange,
        category: post.category,
        specialty: post.specialty,
        paymentMethods: post.paymentMethods,
        workingArea: post.workingArea,
        isActive: post.isActive
      })
    })
    console.log('Precarga de posts en DB OK!')

    usersDB.map(user => {
      User.create({
        firstname: user.firstname,
        lastname: user.lastname,
        age: user.age,
        ID_Passport: user.ID_Passport,
        address: user.address,
        phoneNumber: user.phoneNumber,
        email: user.email,
        summary: user.summary,
        photo: user.photo || 'https://ojodepezfotografos.com/wp-content/uploads/2019/03/SESION-DE-FOTOS-PERFIL-PROFESIONAL-10.jpg',
        score: user.score,
        jobDone: user.jobDone,
        isVaccinated: user.isVaccinated,
        isNew: user.isNew,
        isAdmin: user.isAdmin,
        isActive: user.isActive,
      })
    })
    console.log('Precarga de users en DB OK!')
  });
});
