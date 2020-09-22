const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const auth = {};
const {
    config
} = require('../config/config');



const {
    user
} = require('../database');


auth.login = async (req, res) => {
    const User = await user.findOne({
        where: {
            Username: req.body.Username
        }
    });

    if (User) {
        const Pass = bcrypt.compareSync(req.body.Password, User.Password);
        if (Pass) {
            const token = jwt.sign({
                User
            }, config.secret);
            res.json({
                success: true,
                token
            }, );
        } else {
            res.json({
                error: 'Error en usuario y/o contraseña'
            });
        }
    } else {
        res.json({
            error: 'Error en usuario y/o contraseña'
        });
    }
}




module.exports = auth;