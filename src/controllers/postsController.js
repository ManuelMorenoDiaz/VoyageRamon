const Post = require('../models/posts.js');

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Publicacion no encontrada' });
    }
    res.json(post);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const { lugar_id, titulo, descripcion, cantidad_personas, fecha, presupuesto, estado } = req.body;

  try {
    const newPost = new Post({
      lugar_id,
      titulo,
      descripcion,
      cantidad_personas,
      fecha,
      presupuesto,
      estado
    });
    const savedPost = await newPost.save();
    res.json(savedPost);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Publicacion no encontrada' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Publicacion no encontrada' });
    }
    res.json({ message: 'Publicacion eliminada correctamente' });
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
}