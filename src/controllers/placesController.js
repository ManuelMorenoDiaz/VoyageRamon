const Place = require('../models/places.js');

const getPlaces = async (req, res) => {
  if(req.query.categoria_id==null){
    try {
      const places = await Place.find();
      res.json(places);
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }else{
    try {
      const places = await Place.find({categoria_id: req.query.categoria_id});
      res.json(places);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  }
 
};

const getPlace = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ message: 'Lugar no encontrado' });
    }
    res.json(place);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPlace = async (req, res) => {
  const { nombre, imagen, detalles, categoria_id } = req.body;

  try {
    const newPlace = new Place({
      nombre,
      imagen,
      detalles,
      categoria_id
    });
    const savedPlace = await newPlace.save();
    res.json(savedPlace);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePlace = async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlace) {
      return res.status(404).json({ message: 'Lugar no encontrado' });
    }
    res.json(updatedPlace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePlace = async (req, res) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete(req.params.id);
    if (!deletedPlace) {
      return res.status(404).json({ message: 'Lugar no encontrado' });
    }
    res.json({ message: 'Lugar eliminado correctamente' });
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  deletePlace
}