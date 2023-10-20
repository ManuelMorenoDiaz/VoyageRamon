const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  nombre: {
    type: String,
    maxlength: 40,
    required: true,
  },
  apellido_paterno: {
    type: String,
    maxlength: 40,
    required: true
  },
  apellido_materno: {
    type: String,
    maxlength: 40,
  },
  email: {
    type: String,
    maxlength: 100,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    maxlength: 255,
    required: true
  },
  calificacion: {
    type: String,
    maxlength: 3,
    required: true
  },
  imagen: {
    type: String,
    maxlength: 255,
  },
  estado_republica: {
    type: String,
    maxlength: 50,
    required: true
  },
},
  {
    timestamps: true //Para verificar fecha de creacion y modificacion
  }
);

module.exports = model('User', userSchema);
