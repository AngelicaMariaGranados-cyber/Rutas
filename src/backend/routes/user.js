const {Router} = require('express');
const router = Router();
const { register } = require('../controllers/usercontroller');
const authToken = require('../middlewares/Authtoken');

router.post('/register',authToken.validaToken,register);


module.exports = router;