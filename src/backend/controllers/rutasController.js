const jwt = require('jsonwebtoken');

const ruta = {};
const {config} = require('../config/config');


ruta.getrutas= (req, res) => {
	jwt.verify(req.token, config.secret, (err, data) => {
		if(err) {
			res.sendStatus(403);
		} else {
			res.json({
				text: 'protected Response!',
				data
			});
		}
	});
};

/* jwt.verify(req.token, config.secret,(err, data) =>{
    if(err){
        res.json({
            message: err,
        })
    }else{
        res.json({
            message: 'Hola se tiene acceso',
            data
        });
    }
} ) */
module.exports=ruta;
