const Sequelize = require('sequelize');

const usermodel = require('./models/user');
const rolemodel = require('./models/roles');

const sequelize = new Sequelize('19uI3hT6mD','19uI3hT6mD','ukcY85PqRs',{
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const user = usermodel(sequelize, Sequelize);

const role = rolemodel(sequelize, Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log('Tablas sincronizadas')
})

module.exports = {
    user,
    role
}
