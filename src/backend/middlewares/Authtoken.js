function validaToken (req, res, next){
    const header = req.headers['authorization'];
    console.log(header);
    if (typeof header != 'undefined'){
        const bearer = header.split(" ");
        const tokenBearer =bearer[1];
        req.token = tokenBearer;
        next()
    }else{
        res.sendStatus(403);
    }
}


module.exports = {
    validaToken
}