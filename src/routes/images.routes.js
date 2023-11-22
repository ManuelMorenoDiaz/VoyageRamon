const Router = require('express');
const { getImages, getImage, createImage, updateImage, deleteImage } = require('../controllers/imagesController.js');

const router = Router();

router.get('/images', getImages);
router.get('/images/:id', getImage);
router.post('/images', createImage);
router.delete('/images/:id', deleteImage);
router.put('/images/:id', updateImage);

module.exports = router;