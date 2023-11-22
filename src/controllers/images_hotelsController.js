const Images_hotel = require('../models/images_hotels.js');

const getImages_hotels = async (req, res) => {
  try {
    const hotelId = req.query.hotel_id; 
    const images_hotels = await Images_hotel.find({ id_hotel: hotelId }).populate('id_hotel').populate('id_imagen');
    res.json(images_hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getImages_hotel = async (req, res) => {
  try {
    const images_hotel = await Images_hotel.findById(req.params.id);
    if (!images_hotel) {
      return res.status(404).json({ message: 'No hay ninguna imagen de hotel encontrada' });
    }
    res.json(images_hotel);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createImages_hotel = async (req, res) => {
  const {id_hotel, id_imagen} = req.body;
   
  try{
      const newImages_hotel = new Images_hotel({
        id_hotel,
        id_imagen
      });
      const savedImages_hotel = await newImages_hotel.save();
      res.json(savedImages_hotel);

    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateImages_hotel = async (req, res) => {
  try {
    const updatedImages_hotel = await Images_hotel.findByIdAndUpdate( req.params.id, req.body, { new: true });
    if (!updatedImages_hotel) {
      return res.status(404).json({ message: 'No hay ninguna imagen de hotel encontrada' });
    }
    res.json(updatedImages_hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteImages_hotel = async (req, res) => {
  try {
    const deletedImages_hotel = await Images_hotel.findByIdAndDelete( req.params.id);
    if (!deletedImages_hotel) {
      return res.status(404).json({ message: 'No hay ninguna imagen de hotel encontrada' });
    }
    res.json({ message: 'Imagen de hotel encontrada correctamente' });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getImages_hotels,
  getImages_hotel,
  createImages_hotel,
  updateImages_hotel,
  deleteImages_hotel
}