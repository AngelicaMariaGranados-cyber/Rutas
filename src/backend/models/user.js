
module.exports = (sequelize, type) => {
    return sequelize.define('Users',{
        Id_Cel: {
            type: type.INTEGER,
            primaryKey: true
        },
        Username: type.STRING,
        Password: type.STRING,
        Role_Id:{
           type: type.INTEGER,
           references: {
               model:'roles',
               key: 'Id_Role'    
           }
        }
            
    })
}