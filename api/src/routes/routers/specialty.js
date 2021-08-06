const { Router } = require('express');
const { getAllSpecialties, getSpecialtyById, createSpecialty, updateSpecialty, deleteSpecialty } = require('../../controllers/specialtyLogic');

const router = Router();

router.get('/', getAllSpecialties);
router.get('/:idSpecialty', getSpecialtyById);
router.post('/', createSpecialty);
router.put('/:idSpecialty', updateSpecialty);
router.delete('/:idSpecialty', deleteSpecialty);


module.exports = router;