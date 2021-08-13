const { Router } = require('express');
const { getAllReviews, getReviewById, createReview, updateReview } = require('../../controllers/reviewLogic');


const router = Router();

router.get('/', getAllReviews);
router.get('/:idReview', getReviewById);
router.post('/', createReview);
router.put('/:idReview', updateReview);


module.exports = router;