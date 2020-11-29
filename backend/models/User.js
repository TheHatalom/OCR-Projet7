const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const User = sequelize.define('User',
{
    // Model attributes are defined here
    id:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    username:
    {
        type:DataTypes.STRING(30),
        allowNull:false,
        unique:true
    },
    email:
    {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:
    {
        type:DataTypes.STRING,
        allowNull:false
    }
}, 
{
    tableName:"groupomania_users"
});

module.exports = User;

// le modèle défini correspond à la classe lui-même
console.log(User === sequelize.models.User); // true

// synchronise les nouvelles valeurs avec les valeurs actuelles
User.sync(/*{ alter:true }*/);