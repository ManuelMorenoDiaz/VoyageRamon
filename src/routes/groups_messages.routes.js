const Router = require('express');
const { getGroups_messages, getGroups_message, createGroups_message, updateGroups_message, deleteGroups_message } = require('../controllers/groups_messagesController.js');

const router = Router();

router.get('/groups_messages', getGroups_messages);
router.get('/groups_messages/:id', getGroups_message);
router.post('/groups_messages', createGroups_message);
router.delete('/groups_messages/:id', deleteGroups_message);
router.put('/groups_messages/:id', updateGroups_message);

module.exports = router;