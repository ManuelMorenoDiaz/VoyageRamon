const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const friendSchema = new Schema({
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  id_amigo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  estado: {
    type: String,
    enum: ['Pending', 'Friend'],
    default: 'user'
  }
});

module.exports = model('Friend', friendSchema);
