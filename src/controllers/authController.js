const User = require('../models/users.js');
const bcrypt = require('bcryptjs');
const {createAccessToken} = require('../components/token.js')

const register = async (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, email, password} = req.body;
   
    try{
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            nombre, 
            apellido_paterno,
            apellido_materno, 
            email,
            password : passwordHash
        });
    
        const savedUser = await newUser.save();
        const token = await createAccessToken({id: savedUser._id})

        res.cookie('token', token);
        res.json({
            id : savedUser._id,
            nombre : savedUser.nombre,
            apellido_paterno : savedUser.apellido_paterno,
            apellido_materno : savedUser.apellido_materno,
            email : savedUser.email,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;
   
    try{
        const foundUser = await User.findOne({email});
        if (!foundUser) {
            return res.status(400).json({message: 'Usuario no encontrado'});
        }

        const match = await bcrypt.compare(password, foundUser.password)
        if (!match) {
            return res.status(400).json({message: 'Credenciales invalidas'});
        }

        const token = await createAccessToken({id: foundUser._id})

        res.cookie('token', token);
        res.json({
            id : foundUser._id,
            nombre : foundUser.nombre,
            email : foundUser.email,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const logout = (req, res) => {
    res.cookie('token',"",{expires:new Date(0)});
    return res.sendStatus(200);
};

const profile = async (req, res) => {
    const foundUser = await User.findById(req.user.id)
    if (!foundUser) {
        return res.status(404).json({message:"Usuario no encontrado"})
    }

    return res.json({
        id : foundUser._id,
        nombre : foundUser.nombre,
        email : foundUser.email,
        createdAt: foundUser.createdAt,
        updatedAt: foundUser.updatedAt
    });
};

module.exports = {
    register,
    login,
    logout,
    profile,
}