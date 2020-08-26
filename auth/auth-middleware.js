const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
    try {
        const token = req.headers;
        if (token) {
            jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
                if (err) {
                    res.status(401).json({
                        message: 'You are not authorized for this'
                    });
                } else {
                    res.decodedJwt = decodedToken;
                    console.log(req.decodedJwt);
                    next();
                }
            })
        } else {
            throw new Error('invalid auth data')
        }
    } catch (err) {
        res.status(401).json({
            err:err.message
        });
    };
};