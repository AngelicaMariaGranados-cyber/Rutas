const {Router} = require('express');
const router = Router();
const { login } = require('../controllers/authcontroller')


router.get('/login', login);






module.exports = router;