const { Router } = require('express');
const router = Router();
const { getAllReports, getReportById, createReport, updateReport, deleteReport, getSettledReports } = require('../../controllers/reportLogic.js');

router.get('/settled', getSettledReports)
router.get('/', getAllReports);
router.get('/:idReport', getReportById);
router.post('/', createReport);
router.put('/:idReport', updateReport);
router.delete('/:idReport', deleteReport);

module.exports = router;