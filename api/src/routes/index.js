const { Router } = require('express');
const router = Router();
const routerCheckout = require('./routers/checkout');
const routerUser = require('./routers/user');
const routerPost = require('./routers/post');
const routerOrder = require('./routers/order');
const routerCategory = require('./routers/category');
const routerSpecialty = require('./routers/specialty');
const routerQuestion = require('./routers/question');
const routerAnswer = require('./routers/answer');
const routerReport = require('./routers/report');
const routerReview = require('./routers/review');


// **Routers**

// router.use('/admin', adminLogic);
router.use('/user', routerUser);
router.use('/post', routerPost);
router.use('/category', routerCategory);
router.use('/specialty', routerSpecialty);
router.use('/order', routerOrder);
router.use('/question', routerQuestion);
router.use('/answer', routerAnswer);
router.use('/review', routerReview);
router.use('/report', routerReport);
router.use('/testcheckoutback', routerCheckout);
// router.use('/checkout', checkoutLogic); 




module.exports = router;