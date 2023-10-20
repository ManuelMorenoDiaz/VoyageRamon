const Router = require('express');
const { getPosts, getPost, createPost, updatePost, deletePost} = require('../controllers/postsController.js');

const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPost);
router.post('/posts', createPost);
router.delete('/posts/:id', updatePost);
router.put('/posts/:id', deletePost);

module.exports = router;