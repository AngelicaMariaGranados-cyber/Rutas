const {Router} = require('express');
const router = Router();
const { login,register } = require('../controllers/authcontroller');

router.post('/register',register);

router.post('/login', login);







module.exports = router;