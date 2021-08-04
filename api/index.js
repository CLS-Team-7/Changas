const server = require('./src/app.js');
const { conn, Post, User, Order } = require('./src/db.js');


// importar el seeder de posts aca y guardarlo en una variable
// importar el seeder de users aca y guardarlo en una variable


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    // mapear la variable con los posts:
    // postsSeeders.map(post => {
    //   Post.create({
    //     typePost: post.typePost,
    //     title: post.title,
    //     description: post.description,
    //     image: post.image || 'https://st.depositphotos.com/1158045/2262/i/600/depositphotos_22620531-stock-photo-technician-repairing-an-hot-water.jpg',
    //     princeRange: post.princeRange,
    //     timeRange: post.timeRange,
    //     category: post.category,
    //     specialty: post.specialty,
    //     paymentMethods: post.paymentMethods,
    //     workingArea: post.workingArea,
    //     isActive: post.isActive
    //   })
    // })
    // console.log('Precarga de posts en DB OK!')
  });
});
