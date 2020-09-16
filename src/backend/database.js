const Sequelize = require('sequelize');

const {config} = require('./config/config');

const usermodel = require('./models/user');
const rolemodel = require('./models/roles');

const sequelize = new Sequelize(config.userdb,config.database,config.passdb,{
    host: config.hostdb,
    dialect: 'mysql'
});

const user = usermodel(sequelize, Sequelize);

const role = rolemodel(sequelize, Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log('Tablas sincronizadas')
}).catch((err)=>{
    console.log('Error: ',err);
});

module.exports = {
    user,
    role
}
