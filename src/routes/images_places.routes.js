const Router = require('express');
const { getImages_places, getImages_place, createImages_place, updateImages_place, deleteImages_place} = require('../controllers/images_placesController.js');

const router = Router();

router.get('/images_places', getImages_places);
router.get('/images_places/:id', getImages_place);
router.post('/images_places', createImages_place);
router.delete('/images_places/:id', deleteImages_place);
router.put('/images_places/:id', updateImages_place );

module.exports = router;