const Router = require('express');
const {  getHotels, getHotel, createHotel, updateHotel, deleteHotel} = require('../controllers/hotelsController.js');

const router = Router();

router.get('/hotels', getHotels);
router.get('/hotels/:id', getHotel);
router.post('/hotels', createHotel);
router.delete('/hotels/:id', updateHotel);
router.put('/hotels/:id', deleteHotel);

module.exports = router;