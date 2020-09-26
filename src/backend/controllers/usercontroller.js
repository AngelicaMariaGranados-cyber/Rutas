const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usuario = {};
const {
    config
} = require('../config/config');



const {
    user
} = require('../database');



usuario.register = (req, res) => {
    jwt.verify(req.token, config.secret, async (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const User = await user.findOne({
                where: {
                    Username: req.body.Username
                }
            });
            if (!User) {
                const id = await user.findOne({
                    where: {
                        Id_Cel: req.body.Id_Cel
                    }
                });
                if (!id) {
                    req.body.Password = bcrypt.hashSync(req.body.Password, 10);
                    await user.create(req.body);
                    res.json({
                        message: 'User Created',
                        data
                    });
                }else{
                    res.json({
                        message: 'Cedula ya esta registrada'
                    });
                }
            } else {
                res.json({
                    message: 'usuario ya esta en uso'
                });
            }
        }
    });

}


module.exports = usuario;