const Users_post = require('../models/users_posts.js');

const getUsers_posts = async (req, res) => {
  try {
    const users_posts = await Users_post.find();
    res.json(users_posts);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers_post = async (req, res) => {
  try {
    const users_post = await Users_post.findById(req.params.id);
    if (!users_post) {
      return res.status(404).json({ message: 'No hay ninguna publicaciones de usuarios encontradas' });
    }
    res.json(users_post);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUsers_post = async (req, res) => {
  const { id_publicaciones, id_usuarios, tipo } = req.body;

  try {
    const newUsers_post = new Users_post({
      id_publicaciones,
      id_usuarios,
      tipo
    });
    const savedUsers_post = await newUsers_post.save();
    res.json(savedUsers_post);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUsers_post = async (req, res) => {
  try {
    const updatedUsers_post = await Users_post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUsers_post) {
      return res.status(404).json({ message: 'No hay ninguna publicaciones de usuarios encontradas' });
    }
    res.json(updatedUsers_post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUsers_post = async (req, res) => {
  try {
    const deletedUsers_post = await Users_post.findByIdAndDelete(req.params.id);
    if (!deletedUsers_post) {
      return res.status(404).json({ message: 'No hay ninguna publicaciones de usuarios encontradas' });
    }
    res.json({ message: 'Publicaciones de usuarios encontradas correctamente' });
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers_posts,
  getUsers_post,
  createUsers_post,
  updateUsers_post,
  deleteUsers_post
}