const {Router} = require('express');
const adminController = require('../controllers/adminController');
const adminRouter = Router();

adminRouter.get('/adoptedpets', adminController.getAdoptedPets);

module.exports = adminRouter;
