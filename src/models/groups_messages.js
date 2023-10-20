const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const groups_messageSchema = new Schema({
  pub_usr_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users_post',
    required: true
  },
  mensaje: {
    type: String,
    maxlength: 255,
    required: true
  },
},
{
  timestamps: true
}
);

module.exports = model('Groups_message', groups_messageSchema);