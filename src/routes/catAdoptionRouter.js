const {Router} = require('express');
const catAdoptionRouter = Router();
const catsFormController = require('../controllers/catsFormController');

catAdoptionRouter.post('/', catsFormController.post);
catAdoptionRouter.get('/',catsFormController.getApprovedCatAdoption);
catAdoptionRouter.patch('/:id',catsFormController.approveCatForm);

module.exports = catAdoptionRouter;