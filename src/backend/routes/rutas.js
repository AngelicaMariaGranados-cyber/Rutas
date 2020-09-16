const {Router} = require('express');
const router = Router();
const {getrutas} = require('../controllers/rutasController');
const authToken = require('../middlewares/Authtoken');

router.get('/rutas',authToken.validaToken,getrutas);


module.exports=router;

