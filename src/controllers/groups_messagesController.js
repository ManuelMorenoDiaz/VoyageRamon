const Groups_message = require('../models/groups_messages.js');

const getGroups_messages = async (req, res) => {
  try {
    const groups_messages = await Groups_message.find();
    res.json(groups_messages);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGroups_message = async (req, res) => {
  try {
    const groups_messages = await Groups_message.findById(req.params.id);
    if (!groups_messages) {
      return res.status(404).json({ message: 'Mensajes de grupo no encontrados' });
    }
    res.json(groups_messages);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createGroups_message = async (req, res) => {
  const {pub_usr_id, mensaje} = req.body;
   
  try{
      const newGroups_message = new Groups_message({
        pub_usr_id,
        mensaje
      });
      const savedGroups_message = await newGroups_message.save();
      res.json(savedGroups_message);

    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGroups_message = async (req, res) => {
  try {
    const updatedGroups_message = await Groups_message.findByIdAndUpdate( req.params.id, {
      pub_usr_id,
      mensaje
    }, { new: true });
    if (!updatedGroups_message) {
      return res.status(404).json({ message: 'Mensajes de grupo no encontrados' });
    }
    res.json(updatedGroups_message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteGroups_message = async (req, res) => {
  try {
    const deletedGroups_message = await Groups_message.findByIdAndDelete( req.params.id);
    if (!deletedGroups_message) {
      return res.status(404).json({ message: 'Mensajes de grupo no encontrados' });
    }
    res.json({ message: 'Mensajes de grupo eliminados correctamente' });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGroups_messages,
  getGroups_message,
  createGroups_message,
  updateGroups_message,
  deleteGroups_message
}