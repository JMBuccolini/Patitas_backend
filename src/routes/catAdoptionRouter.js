const {Router} = require('express');
const catAdoptionRouter = Router();
const catsFormController = require('../controllers/catsFormController');

catAdoptionRouter.post('/:id', catsFormController.post);

module.exports = catAdoptionRouter;