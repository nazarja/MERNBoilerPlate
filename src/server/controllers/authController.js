const jwt = require('../middlewares/authMiddleware');
const { signUpUser, signInUser, refreshUser } = require("../services/authService");
const { cookieName, expiresSeconds } = require('../configs/config');

const signUp = async (req, res) => {
    return await signUpUser(req.body)
        ? res.status(200).end()
        : res.status(400).end();
};

const signIn = async (req, res) => {
    const user = await signInUser(req.body);
    if (user) {
        console.log(cookieName)
        res.cookie(cookieName, jwt.sign({ _id: user._id }), {
            maxAge: new Date().getTime() + expiresSeconds,
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        });
        res.status(200).json({ user });
    }
    else res.status(401).end();
};

const signOut = (req, res) => {
    res.clearCookie(cookieName);
    res.status(200).json({ user: null });
};

const refreshAuth = async (req, res) => {
    let user = null;
    if (req.user.isAuth) {
        user = await refreshUser(req.user._id)
        res.status(200).json({ user });
    }
    else res.status(204).json({ user });
};

module.exports = { signUp, signIn, signOut, refreshAuth };
