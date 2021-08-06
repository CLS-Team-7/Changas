const { Router } = require('express');
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../../controllers/categoryLogic');


const router = Router();

router.get('/', getAllCategories);
router.get('/:idCategory', getCategoryById);
router.post('/', createCategory);
router.put('/:idCategory', updateCategory);
router.delete('/:idCategory', deleteCategory);


module.exports = router;