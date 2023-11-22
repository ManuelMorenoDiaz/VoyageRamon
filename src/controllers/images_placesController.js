const Images_place = require('../models/images_places.js');

const getImages_places = async (req, res) => {
  try {
    const images_places = await Images_place.find();
    res.json(images_places);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getImages_place = async (req, res) => {
  try {
    const images_place = await Images_place.findById(req.params.id);
    if (!images_place) {
      return res.status(404).json({ message: 'No hay ninguna imagen de lugar encontrada' });
    }
    res.json(images_place);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createImages_place = async (req, res) => {
  const { id_lugar, id_imagen } = req.body;

  try {
    const newImages_place = new Images_place({
      id_lugar,
      id_imagen
    });
    const savedImages_place = await newImages_place.save();
    res.json(savedImages_place);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateImages_place = async (req, res) => {
  try {
    const updatedImages_place = await Images_place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedImages_place) {
      return res.status(404).json({ message: 'No hay ninguna imagen de lugar encontrada' });
    }
    res.json(updatedImages_place);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteImages_place = async (req, res) => {
  try {
    const deletedImages_place = await Images_place.findByIdAndDelete(req.params.id);
    if (!deletedImages_place) {
      return res.status(404).json({ message: 'No hay ninguna imagen de lugar encontrada' });
    }
    res.json({ message: 'Imagen de lugar encontrada correctamente' });
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getImages_places,
  getImages_place,
  createImages_place,
  updateImages_place,
  deleteImages_place
}