const authRouter = require('express').Router();
const authController = require('../controllers/authController');

authRouter.route('/signup')
    .post(authController.signUp);

authRouter.route('/signin')
    .post(authController.signIn);

authRouter.route('/signout')
    .post(authController.signOut);

authRouter.route('/refreshAuth')
    .post(authController.refreshAuth);

module.exports = authRouter;
