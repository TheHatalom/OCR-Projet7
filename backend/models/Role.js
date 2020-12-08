const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

//Modèle Rôle
const Role = sequelize.define('Role',
{
    //Les attributs du modèle
    id:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    role:
    {
        type:DataTypes.STRING(30),
        allowNull:false
    },
    code:
    {
        type:DataTypes.STRING(3),
        allowNull:false
    }
}, 
{
    tableName:"groupomania_role"
});

//Export du modèle
module.exports = Role;

// le modèle défini correspond à la classe lui-même
console.log(Role === sequelize.models.Role); // true

// synchronise les nouvelles valeurs avec les valeurs actuelles
Role.sync(/*{ alter:true }*/);