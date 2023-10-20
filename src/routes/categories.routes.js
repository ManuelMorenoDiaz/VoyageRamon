const Router = require('express');
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory} = require('../controllers/categoriesController.js');

const router = Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);
router.post('/categories', createCategory);
router.delete('/categories/:id', updateCategory);
router.put('/categories/:id', deleteCategory);

module.exports = router;