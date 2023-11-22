const Router = require('express');
const { getHotels, getHotel, createHotel, updateHotel, deleteHotel } = require('../controllers/hotelsController.js');

const router = Router();

router.get('/hotels', getHotels);
router.get('/hotels/:id', getHotel);
router.post('/hotels', createHotel);
router.delete('/hotels/:id', deleteHotel);
router.put('/hotels/:id', updateHotel);

module.exports = router;