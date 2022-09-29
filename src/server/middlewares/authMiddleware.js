const jwt = require('jsonwebtoken');
const { jwtSecret, cookieName } = require('../configs/config');
const { expiresIn } = require('../configs/config');

const sign = data => {
    return jwt.sign({
        data: data
    }, jwtSecret, { expiresIn: expiresIn });
};

const verify = token => {
    return jwt.verify(token, jwtSecret);
};

const jwtParser = (req, res, next) => {
    req.user = { _id: null, isAuth: false };
    let token = req.cookies[cookieName];
    if (token) {
        try {
            token = verify(token);
            req.user = { _id: token.data._id, isAuth: true };
        } catch (err) {
            res.clearCookie(cookieName);
        };
    }
    next();
};

const protectedRoute = (req, res, next) => {
    if (!req.user.isAuth) res.status(403).end();
    else next();
};

module.exports = { sign, jwtParser, protectedRoute };