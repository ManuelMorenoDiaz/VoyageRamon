const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const users_postSchema = new Schema({
  id_publicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tipo: {
    type: String,
    enum: ['Owner', 'Participant', 'Pending'],
    default: 'Pending',
    required: true
  }
});

module.exports = model('Users_post', users_postSchema);
