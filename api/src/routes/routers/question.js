const { Router } = require('express');
const { getAllQuestions, getQuestionById, createQuestion, deleteQuestion } = require('../../controllers/questionLogic')
const router = Router();


router.get('/', getAllQuestions);
router.get('/:idQuestion', getQuestionById);
router.post('/', createQuestion);
router.delete('/:idQuestion', deleteQuestion);


module.exports = router;