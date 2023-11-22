const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const users_postSchema = new Schema({
  id_publicaciones: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post',
    required: true
  },
  id_usuarios: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  tipo: {
    type: String,
    enum: ['Owner', 'Participant', 'Pending'],
    required: true,
    default: 'Activo'
  }
});

module.exports = model('Users_post', users_postSchema);
