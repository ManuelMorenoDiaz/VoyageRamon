const Message = require('../models/messages.js');

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }
    res.json(message);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMessage = async (req, res) => {
  const { emisor_id, receptor_id, mensaje, fecha } = req.body;

  try {
    const newMessage = new Message({
      emisor_id,
      receptor_id,
      mensaje,
      fecha
    });
    const savedMessage = await newMessage.save();
    res.json(savedMessage);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMessage = async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMessage) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);
    if (!deletedMessage) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }
    res.json({ message: 'Mensaje eliminado correctamente' });
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMessages,
  getMessage,
  createMessage,
  updateMessage,
  deleteMessage
}