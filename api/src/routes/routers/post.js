const { Router } = require('express');
const { getAllPosts, getPostByTitle, getPostById, createPost, updatePost, deletePost } = require('../../controllers/postLogic');

const router = Router();

router.get('/', getAllPosts);
router.get('/search', getPostByTitle);
router.get('/:idPost', getPostById);
router.post('/', createPost);
router.put('/:idPost', updatePost);
router.delete('/:idPost', deletePost);


module.exports = router;