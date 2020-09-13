const auth = {};
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const {user, role} = require('../database');


auth.register =  async (req, res) => {

    req.body.Password = bcrypt.hashSync(req.body.Password, 10);
    const User = await user.create(req.body);
    res.json({
        message: 'User Created'
    });

}

auth.login =  async (req, res) => {
    const User = await user.findOne({where: {Username:req.body.Username}})
    
    if(User){
        const Pass = bcrypt.compareSync(req.body.Password, User.Password);
        if(Pass){
            res.json({success: createToken(User)});
        }else{
            res.json({error: 'Error en usuario y/o contraseña'});
        }
    }else{
        res.json({error: 'Error en usuario y/o contraseña'});
    }
}

const createToken = (user) => {
    const payload = {
        userId: user.Id_Cel,
        roleId: user.Role_Id,
        createdAt: moment().unix(),
        expiredAt: moment().add(15, 'minutes').unix()
    }
    return jwt.encode(payload, 'Secret letter');
}


module.exports = auth;