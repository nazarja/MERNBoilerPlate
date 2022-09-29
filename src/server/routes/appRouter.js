const appRouter = require('express').Router();
const appController = require('../controllers/appController');
const { protectedRoute } = require('../middlewares/authMiddleware');

appRouter.route('')
    .get(appController.serveClient);

appRouter.route('*')
    .get(appController.notFound);

appRouter.route('/test')
    .get(protectedRoute, appController.test)
    .post(protectedRoute, appController.test)
    .put(protectedRoute, appController.test)
    .patch(protectedRoute, appController.test)
    .delete(protectedRoute, appController.test);

module.exports = appRouter;

