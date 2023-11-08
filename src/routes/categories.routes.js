const Router = require('express');
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory} = require('../controllers/categoriesController.js');

const router = Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);
router.post('/categories', createCategory);
router.delete('/categories/:id', deleteCategory );
router.put('/categories/:id', updateCategory);

module.exports = router;