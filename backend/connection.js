const Sequelize = require('sequelize');
const fs = require('fs');


//Connexion à la base de données
const sequelize = new Sequelize('mysql://root@localhost:3306/groupomania');
async function connexion()
{
    try
    {
        await sequelize.authenticate();
        console.log("Connexion à la base de données réussie !");
    }
    catch(error)
    {
        console.log("Erreur de connexion à la base de données :" + error);
    }
}
connexion();


module.exports = sequelize;