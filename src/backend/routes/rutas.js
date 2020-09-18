const {Router} = require('express');
const router = Router();
const {getrutas} = require('../controllers/rutasController');


router.get('/rutas',getrutas);


module.exports=router;

