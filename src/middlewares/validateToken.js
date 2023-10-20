const jtkn = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../components/token.js');

//importar esta constante en una ruta permite validar que el usuario este logeado para acceder a un metodo  
const authRequired = (req, res, next) => {
    const {token} = req.cookies
    if (!token) {
        return res.status(401).json({message: 'Autorizacion denegada'})
    }

    jtkn.verify(token, TOKEN_SECRET,(err,user) => {
        if (err) {
            return res.status(401).json({message: 'Token invalido'})
        };
        req.user = user;

        next();
    })
};

module.exports = authRequired;