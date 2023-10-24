const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const images_placeSchema = new Schema({
  id_lugar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'place',
    required: true
  },
  id_imagen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'image',
    required: true
  }
});

module.exports = model('Images_place', images_placeSchema);