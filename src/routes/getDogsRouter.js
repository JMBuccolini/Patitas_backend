const {Router} = require('express');
const getDogsController = require('../controllers/getDogsController');
const getDogsRouter = Router();

getDogsRouter.get('/',getDogsController.get); 
getDogsRouter.post('/', getDogsController.post);
getDogsRouter.get('/searchdog', getDogsController.getOneDog);


module.exports = getDogsRouter;

