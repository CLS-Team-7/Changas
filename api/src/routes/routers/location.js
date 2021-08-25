const { Router } = require('express');
const { getAllLocations } = require('../../controllers/locationLogic.js');


const router = Router();

router.get('/', getAllLocations);


module.exports = router;