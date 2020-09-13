const express = require ('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const Authtoken = require('./middlewares/Authtoken');
const rutaapi= require('./routes/auth');
const rutas = require('./routes/rutas');

const app = express();

require('./database');

app.set('port', process.env.PORT || 3000);

app.use(bodyparser.urlencoded({extended: false}));
app.use(Authtoken);
app.use(bodyparser.json());
app.use(morgan('dev'));


app.use('/api',rutaapi);
app.use('/api',rutas);





app.listen(app.get('port'), () => {
    console.log("Server on port ",app.get('port'));
});