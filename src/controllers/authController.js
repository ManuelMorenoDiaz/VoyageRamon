const User = require('../models/users.js');
const jtkn = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { TOKEN_SECRET } = require('../components/token.js');
const { createAccessToken } = require('../components/token.js')

const register = async (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, email, password } = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            nombre,
            apellido_paterno,
            apellido_materno,
            email,
            password: passwordHash
        });

        const savedUser = await newUser.save();
        const token = await createAccessToken({ _id: savedUser._id })

        res.cookie('token', token);
        res.json({
            _id: savedUser._id,
            nombre: savedUser.nombre,
            apellido_paterno: savedUser.apellido_paterno,
            apellido_materno: savedUser.apellido_materno,
            email: savedUser.email,
            role: savedUser.role,
            estado: savedUser.estado,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const match = await bcrypt.compare(password, foundUser.password)
        if (!match) {
            return res.status(400).json({ message: 'Credenciales invalidas' });
        }

        const token = await createAccessToken({ _id: foundUser._id })

        res.cookie('token', token);
        res.json({
            _id: foundUser._id,
            nombre: foundUser.nombre,
            apellido_paterno: foundUser.apellido_paterno,
            apellido_materno: foundUser.apellido_materno,
            email: foundUser.email,
            role: foundUser.role,
            estado: foundUser.estado,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const logout = (req, res) => {
    res.cookie('token', "", { expires: new Date(0) });
    return res.sendStatus(200);
};

const verifyToken = async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json(['No autorizado']);
    }

    jtkn.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) {
            return res.status(401).json(['No autorizado']);
        }

        const userFound = await User.findById(user._id)
        if (!userFound) {
            return res.status(401).json(['No se encontro el usuario']);
        }
        return res.json({
            _id: userFound._id,
            nombre: userFound.nombre,
            apellido_paterno: userFound.apellido_paterno,
            apellido_materno: userFound.apellido_materno,
            email: userFound.email,
            role: userFound.role,
        });
    });
}

module.exports = {
    verifyToken,
    register,
    login,
    logout,
}