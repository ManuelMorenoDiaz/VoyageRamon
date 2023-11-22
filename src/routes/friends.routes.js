const Router = require('express');
const { getFriends, getFriend, createFriend, updateFriend, deleteFriend } = require('../controllers/friendsController.js');

const router = Router();

router.get('/friends', getFriends);
router.get('/friends/:id', getFriend);
router.post('/friends', createFriend);
router.delete('/friends/:id', deleteFriend);
router.put('/friends/:id', updateFriend);

module.exports = router;