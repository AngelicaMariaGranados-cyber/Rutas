const {Router} = require('express');
const router = Router();
const { login,register } = require('../controllers/authcontroller');
const authToken = require('../middlewares/Authtoken');



router.post('/login', login);







module.exports = router;