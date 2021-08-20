const { Router } = require('express');
const router = Router();
const { getAllReports, getReportById, createReport, updateReport, deleteReport } = require('../../controllers/reportLogic.js');


router.get('/', getAllReports);
router.get('/:idReport', getReportById);
router.post('/', createReport);
router.put('/:idReport', updateReport);
router.delete('/:idReport', deleteReport);

module.exports = router;