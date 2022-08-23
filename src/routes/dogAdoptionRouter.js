const {Router} = require('express');
const dogAdoptionRouter = Router();
const dogsFormController = require('../controllers/dogsFormController');

dogAdoptionRouter.post('/:id', dogsFormController.post);

module.exports = dogAdoptionRouter;