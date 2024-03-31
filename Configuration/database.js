const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'sql6695475',
    'sql6695475',
    'qweITTWpFM',
    {
        dialect : 'mysql',
        host : 'sql6.freesqldatabase.com'
    }
);

const connectToDb = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Database coonection sucessfull!")
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = { sequelize, connectToDb }