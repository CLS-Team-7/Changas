const { Router } = require('express');
const { getAllAnswers, getAnswerById, createAnswer, deleteAnswer } = require('../../controllers/answerLogic');
const router = Router();

router.get('/', getAllAnswers);
router.get('/:idAnswer', getAnswerById);
router.post('/', createAnswer);
router.delete('/:idAnswer', deleteAnswer);


module.exports = router;