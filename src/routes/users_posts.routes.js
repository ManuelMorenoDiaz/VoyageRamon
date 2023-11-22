const Router = require('express');
const { getUsers_posts, getUsers_post, createUsers_post, updateUsers_post, deleteUsers_post } = require('../controllers/users_postsController.js');

const router = Router();

router.get('/users_post', getUsers_posts);
router.get('/users_post/:id', getUsers_post);
router.post('/users_post', createUsers_post);
router.delete('/users_post/:id', deleteUsers_post);
router.put('/users_post/:id', updateUsers_post);

module.exports = router;