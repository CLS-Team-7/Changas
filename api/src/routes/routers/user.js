const { Router } = require('express');
const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/userLogic');

const router = Router();


router.get('/', getAllUser);
router.get('/:idUser', getUserById);
//router.get('/favs', getFavUsers);
//router.get('/myposts', getMyPosts);
router.post('/', createUser);
router.put('/', updateUser); // :idUser se cambio por el sub que se manda por body.
router.delete('/:idUser', deleteUser);


module.exports = router;