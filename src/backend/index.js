const express = require ('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const rutas = require('./routes/indexroute');


const app = express();

require('./database');

app.set('port', process.env.PORT || 3000);

app.use(bodyparser.urlencoded({extended: false}));

app.use(bodyparser.json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send({
        message: 'Funcionado utilice las rutas indicadas',
        status: 203
    })
});

app.use('/api',rutas);






app.listen(app.get('port'), () => {
    console.log("Server on port ",app.get('port'));
});