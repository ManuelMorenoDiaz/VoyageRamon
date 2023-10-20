const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const postSchema = new Schema({
  lugar_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'place',
     required: true
  },
  titulo: {
    type: String,
    maxlength: 80,
    required: true
  },
  descripcion: {
    type: String,
    maxlength: 500,
    required: true
  },
  cantidad_personas: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  presupuesto: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    enum: ['Activo', 'Finalizado'],
    required: true,
    default: 'Activo'
  }
},
{
  timestamps: true 
}
);

module.exports = model('Post', postSchema);
