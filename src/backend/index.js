const express = require ('express');
const morgan = require('morgan');


const app = express();


app.use(express.json());
app.use(morgan('dev'));


app.get('/',(req, res)=>{
    res.json({
        status:'ok'
    });
});


app.listen(3000 || process.env.PORT, () => {
    console.log("Server on port 3000");
});