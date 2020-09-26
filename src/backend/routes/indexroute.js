const express = require ('express');

const app = express();

const rutaapi= require('./auth');
const rutas = require('./rutas');
const userrutas = require('./user');
const {validaToken} = require('../middlewares/Authtoken');

app.use(rutaapi);
app.use(validaToken,rutas);
app.use(validaToken,userrutas);

module.exports = app;