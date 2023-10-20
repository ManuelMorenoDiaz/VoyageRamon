const User = require('../models/users.js');
const bcrypt = require('bcryptjs');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const {nombre, apellido_paterno, apellido_materno, email, password, calificacion, imagen, estado_republica} = req.body;
   
  try{
      const passwordHash = await bcrypt.hash(password, 10)
  
      const newUser = new User({
        nombre, 
        apellido_paterno,
        apellido_materno, 
        email,
        password: passwordHash,
        calificacion,
        imagen,
        estado_republica
      });
      const savedUser = await newUser.save();
      res.json(savedUser);

    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10)

    const updatedUser = await User.findByIdAndUpdate( req.params.id, {
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      password: passwordHash,
      calificacion,
      imagen,
      estado_republica
      
    }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete( req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}