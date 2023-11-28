const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const placeSchema = new Schema({
  nombre: {
    type: String,
    maxlength: 80,
    required: true
  },
  imagen: {
    type: String,
    maxlength: 255,
    required: true
  },
  detalles: {
    type: String,
    maxlength: 1000,
    required: true
  },
  categoria_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true
  },

},
  {
    timestamps: true
  }
);

module.exports = model('Place', placeSchema);