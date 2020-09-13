module.exports = (req, res, next) =>{

    if(req.path !='/api/login'){
        if(req.headers.authorization){
            next();
        }else{
            res.status(403).send({message: 'No esta autorizado'});
        }
    }else{
        next();
    }
    

    
}