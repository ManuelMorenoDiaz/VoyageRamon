const Router = require('express');
const { getPlaces, getPlace, createPlace, updatePlace, deletePlace } = require('../controllers/placesController.js');

const router = Router();

router.get('/places', getPlaces);
router.get('/places/:id', getPlace);
router.post('/places', createPlace);
router.delete('/places/:id', deletePlace);
router.put('/places/:id', updatePlace);

module.exports = router;