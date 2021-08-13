const { Router } = require('express');
const { getAllReviews, getReviewById } = require('../../controllers/reviewLogic');


const router = Router();

router.get('/', getAllReviews);
router.get('/:idReview', getReviewById)


module.exports = router; 