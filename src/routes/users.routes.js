const Router = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/usersController.js');

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;