const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  titulo: {
    type: String,
    maxlength: 80,
    required: true
  },
  imagen: {
    type: String,
    maxlength: 255,
    required: true
  },
  video: {
    type: String,
    maxlength: 255,
    required: true
  },
  descripcion: {
    type: String,
    maxlength: 1000,
    required: true
  },
},
  {
    timestamps: true
  }
);

module.exports = model('Category', categorySchema);