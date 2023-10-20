const Router = require('express');
const {login, register, logout, profile} = require('../controllers/authController.js');
const authRequired = require('../middlewares/validateToken.js');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authRequired, logout);
router.get('/profile', authRequired, profile);

module.exports = router;