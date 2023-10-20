const jtkn = require('jsonwebtoken');

const TOKEN_SECRET =  "secret"

function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jtkn.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
}

module.exports = {createAccessToken, TOKEN_SECRET};