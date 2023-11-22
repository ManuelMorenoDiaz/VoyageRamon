const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const images_hotelSchema = new Schema({
  id_hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true
  },
  id_imagen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    required: true
  }
});

module.exports = model('Images_hotel', images_hotelSchema);