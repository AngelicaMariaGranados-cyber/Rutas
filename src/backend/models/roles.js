module.exports = (sequelize, type) => {
    return sequelize.define('roles',{
        Id_Role:{
            type: type.INTEGER,
            primaryKey: true
        },
        description: type.STRING
    })
};