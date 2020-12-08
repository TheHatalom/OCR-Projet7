const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Role = require('./Role');

//Modèle User
const User = sequelize.define('User',
{
    //Les attributs du modèle
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
    },
    idRole:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1
    }
}, 
{
    tableName:"groupomania_users"
});

//Liaison avec le modèle Rôle
User.belongsTo(Role, {foreignKey: 'idRole'});
Role.hasMany(User, {foreignKey: 'idRole'});

//Export du modèle
module.exports = User;

// le modèle défini correspond à la classe lui-même
console.log(User === sequelize.models.User); // true

// synchronise les nouvelles valeurs avec les valeurs actuelles
User.sync(/*{ alter:true }*/);