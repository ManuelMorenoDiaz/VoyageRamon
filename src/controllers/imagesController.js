const Image = require('../models/images.js');

const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'No hay ninguna imagen encontrada' });
    }
    res.json(image);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createImage = async (req, res) => {
  const {nombre, imagen_link} = req.body;
   
  try{
      const newImage = new Image({
        nombre,
        imagen_link
      });
      const savedImage = await newImage.save();
      res.json(savedImage);

    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateImage = async (req, res) => {
  try {
    const updatedImage = await Image.findByIdAndUpdate( req.params.id, {
      nombre,
      imagen_link
    }, { new: true });
    if (!updatedImage) {
      return res.status(404).json({ message: 'No hay ninguna imagen encontrada' });
    }
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    const deletedImage = await Image.findByIdAndDelete( req.params.id);
    if (!deletedImage) {
      return res.status(404).json({ message: 'No hay ninguna imagen encontrada' });
    }
    res.json({ message: 'Imagen encontrada correctamente' });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getImages,
  getImage,
  createImage,
  updateImage,
  deleteImage
}