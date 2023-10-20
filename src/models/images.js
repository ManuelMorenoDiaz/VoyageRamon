const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  nombre: {
    type: String,
    maxlength: 40,
    required: true
  },
  imagen_link: {
    type: String,
    maxlength: 255,
    required: true
  }
});

module.exports = model('Image', imageSchema);