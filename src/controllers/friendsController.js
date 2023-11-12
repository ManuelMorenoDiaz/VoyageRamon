const Friend = require('../models/friends.js');

const getFriends = async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFriend = async (req, res) => {
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) {
      return res.status(404).json({ message: 'Amigo no encontrado' });
    }
    res.json(friend);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFriend = async (req, res) => {
  const {id_usuario, id_amigo} = req.body;
   
  try{
      const newFriend = new Friend({
        id_usuario,
        id_amigo
      });
      const savedFriend = await newFriend.save();
      res.json(savedFriend);

    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFriend = async (req, res) => {
  try {
    const updatedFriend = await Friend.findByIdAndUpdate( req.params.id, req.body, { new: true });
    if (!updatedFriend) {
      return res.status(404).json({ message: 'Amigo no encontrado' });
    }
    res.json(updatedFriend);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const deletedFriend = await Friend.findByIdAndDelete( req.params.id);
    if (!deletedFriend) {
      return res.status(404).json({ message: 'Amigo no encontrado' });
    }
    res.json({ message: 'Amigo eliminado correctamente' });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFriends,
  getFriend,
  createFriend,
  updateFriend,
  deleteFriend
}