const {Router} = require('express');
const adminController = require('../controllers/adminController');
const adminRouter = Router();

adminRouter.get('/adoptedpets', adminController.getAdoptedPets); //cantidad de mascotas adoptadas
adminRouter.get('/qacf', adminController.approvedCatAdoptionForm); //qacf= quantity approved cat forms
adminRouter.patch('/approvecatform/:id', adminController.approveCatForm) //recibe por id un formulario para aprobarlo
adminRouter.patch('/rescuedcat/:id', adminController.adoptedCat) //recibe por id un gato y pasa adopted a true
adminRouter.patch('/rescueddog/:id', adminController.adoptedDog) //recibe por id un perro y pasa adopted a true
adminRouter.patch('/approveprovi/:id', adminController.approveProvi) //recibe por id un provi y pasa approved a true

module.exports = adminRouter;
