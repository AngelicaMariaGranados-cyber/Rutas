const express = require ('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const rutaapi= require('./routes/auth');

const app = express();

require('./database');

app.set('port', process.env.PORT || 3000);

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(morgan('dev'));


app.use('/api',rutaapi);





app.listen(app.get('port'), () => {
    console.log("Server on port ",app.get('port'));
});