const {Router} = require('express');
const catAdoptionRouter = Router();
const catsFormController = require('../controllers/catsFormController');

catAdoptionRouter.post('/', catsFormController.post);
catAdoptionRouter.get('/',catsFormController.getApprovedCatAdoption);

module.exports = catAdoptionRouter;