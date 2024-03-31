const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'XXXXXXXXXX',
    'XXXXXXXXXX',
    'XXXXXXXXXX',
    {
        dialect : 'mysql',
        host : 'XXXXXXXXXX'
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
