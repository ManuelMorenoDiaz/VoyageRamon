const Router = require('express');
const { getImages_hotels, getImages_hotel, createImages_hotel, updateImages_hotel, deleteImages_hotel} = require('../controllers/images_hotelsController.js');

const router = Router();

router.get('/images_hotels', getImages_hotels);
router.get('/images_hotels/:id', getImages_hotel);
router.post('/images_hotels', createImages_hotel);
router.delete('/images_hotels/:id', deleteImages_hotel );
router.put('/images_hotels/:id', updateImages_hotel);

module.exports = router;