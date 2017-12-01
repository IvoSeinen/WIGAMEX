const jwt = require('jsonwebtoken');

module.exports.createToken = function (req, res) {
    const token = jwt.sign(process.env.SECRET_KEY, {
        expiresIn: 10000
    });
    return token;
}