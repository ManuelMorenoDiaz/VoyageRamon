const Router = require('express');
const { getImages, getImage, createImage, updateImage, deleteImage} = require('../controllers/imagesController.js');

const router = Router();

router.get('/image', getImages);
router.get('/image/:id', getImage);
router.post('/image', createImage);
router.delete('/image/:id', deleteImage);
router.put('/image/:id', updateImage);

module.exports = router;