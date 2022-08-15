const {Router} = require('express');
const getCatsController = require('../controllers/getCatsController');
const getCatsRouter = Router();

getCatsRouter.get('/', getCatsController.get);
getCatsRouter.post('/', getCatsController.post);
getCatsRouter.get('/searchcat', getCatsController.getOneCat);

module.exports = getCatsRouter;