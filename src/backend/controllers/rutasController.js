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


module.exports=ruta;
