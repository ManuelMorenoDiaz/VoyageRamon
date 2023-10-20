const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const hotelSchema = new Schema({
  lugar_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'place',
     required: true
  },
  nombre: {
    type: String,
    maxlength: 80,
    required: true
  },
  descripcion: {
    type: String,
    maxlength: 255,
    required: true
  },
  direccion: {
    type: String,
    maxlength: 40,
    required: true
  },
  telefono: {
    type: String,
    maxlength: 20,
    required: true
  },
  presupuesto: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    maxlength: 100,
    required: true,
  },
},
{
  timestamps: true 
}
);

module.exports = model('Hotel', hotelSchema);
