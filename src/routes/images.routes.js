const Router = require('express');
const { getImages, getImage, createImage, updateImage, deleteImage} = require('../controllers/imagesController.js');

const router = Router();

router.get('/image', getImages);
router.get('/image/:id', getImage);
router.post('/image', createImage);
router.delete('/image/:id', updateImage);
router.put('/image/:id', deleteImage);

module.exports = router;