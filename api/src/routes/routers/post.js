const { Router } = require('express');
const { getAllPosts, getPostByTitle, getPostById, createPost, updatePost, deletePost, getTodaysPosts, getJobOffers, getJobPetitions, getOnlyPremium } = require('../../controllers/postLogic');

const router = Router();

router.get('/premium', getOnlyPremium);
router.get('/todaysoffers', getTodaysPosts);
router.get('/joboffers', getJobOffers);
router.get('/jobpetitions', getJobPetitions);
router.get('/', getAllPosts);
router.get('/search', getPostByTitle);
router.get('/:idPost', getPostById);
router.post('/', createPost);
router.put('/:idPost', updatePost);
router.delete('/:idPost', deletePost);


module.exports = router;