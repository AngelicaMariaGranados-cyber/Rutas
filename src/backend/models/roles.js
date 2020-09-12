module.exports = (sequelize, type) => {
    return sequelize.define('roles',{
        Id_role:{
            type: type.INTEGER,
            primarykey: true
        },
        description: type.STRING
    })
}