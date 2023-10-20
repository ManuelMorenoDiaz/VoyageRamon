const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const messageSchema = new Schema({
  emisor_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'user',
     required: true
  },
  receptor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
 },
  mensaje: {
    type: String,
    maxlength: 255,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
},
{
  timestamps: true 
}
);

module.exports = model('Message', messageSchema);