const Router = require('express');
const { getMessages, getMessage, createMessage, updateMessage, deleteMessage } = require('../controllers/messagesController.js');

const router = Router();

router.get('/messages', getMessages);
router.get('/messages/:id', getMessage);
router.post('/messages', createMessage);
router.delete('/messages/:id', deleteMessage);
router.put('/messages/:id', updateMessage);

module.exports = router;