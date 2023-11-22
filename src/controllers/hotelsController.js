const Hotel = require('../models/hotels.js');

const getHotels = async (req, res) => {
  try {
    const lugarId = req.query.lugar_id; // Acceder al parámetro desde la URL
    const hotels = await Hotel.find({ lugar_id: lugarId });
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel no encontrada' });
    }
    res.json(hotel);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createHotel = async (req, res) => {
  const { lugar_id, nombre, descripcion, direccion, telefono, presupuesto, email } = req.body;

  try {
    const newHotel = new Hotel({
      lugar_id,
      nombre,
      descripcion,
      direccion,
      telefono,
      presupuesto,
      email
    });
    const savedHotel = await newHotel.save();
    res.json(savedHotel);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHotel) {
      return res.status(404).json({ message: 'Hotel no encontrada' });
    }
    res.json(updatedHotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!deletedHotel) {
      return res.status(404).json({ message: 'Hotel no encontrada' });
    }
    res.json({ message: 'Hotel eliminado correctamente' });
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHotels,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel
}