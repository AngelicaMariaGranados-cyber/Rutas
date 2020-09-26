const {Router} = require('express');
const router = Router();
const { register } = require('../controllers/usercontroller');


router.post('/register',register);


module.exports = router;