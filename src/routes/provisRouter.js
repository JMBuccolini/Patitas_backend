const {Router} = require('express');
const provisFormController = require('../controllers/provisFormController');
const provisRouter = Router();

provisRouter.post('/', provisFormController.post);

module.exports = provisRouter;