const { Router } = require('express');
const { getAllReviews, getReviewById, createReview, updateReview, deleteReview, getPostReview } = require('../../controllers/reviewLogic');
const router = Router();

router.get('/', getAllReviews);
router.get('/:idPost', getPostReview);
router.post('/', createReview);
router.put('/:idReview', updateReview);
router.delete('/:idReview', deleteReview);



module.exports = router;