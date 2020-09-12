const auth = {};
const bcrypt = require('bcryptjs');
const {user, role} = require('../database');


auth.register = (req, res) => {
    
}

auth.login =  async (req, res) => {
    const User = await user.findOne({where: {Username:req.body.username}})
    
    if(User){
        const Pass = bcrypt.compareSync(req.body.password, user.password);
        if(Pass){
            res.json({success: 'TOKEN'});
        }else{
            res.json({error: 'Error en usuario y/o contraseña'});
        }
    }else{
        res.json({error: 'Error en usuario y/o contraseña'});
    }
}


module.exports = auth;