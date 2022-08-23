const {Router} = require('express');
const dogsFormController = require('../controllers/dogsFormController');
const dogAdoptionRouter = Router();

dogAdoptionRouter.post('/:id', dogsFormController.post);

module.exports= dogAdoptionRouter;