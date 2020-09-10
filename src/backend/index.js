const express = require ('express');
const morgan = require('morgan');


const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));


app.use(require('./routes/auth'));





app.listen(app.get('port'), () => {
    console.log("Server on port ",app.get('port'));
});