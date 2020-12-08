const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const User = require('./User')

//Modèle Discussion
const Discussion = sequelize.define('Discussion',
{
    //Les attributs du modèle
    id:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    title:
    {
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true 
    },
    message:
    {
        type:DataTypes.STRING(10000),
        allowNull:false
    },
    userId:
    {
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, 
{
    tableName:"groupomania_discussion"
});

//Liaison avec le modèle User
Discussion.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Discussion, {foreignKey: 'userId'});

//Export du modèle
module.exports = Discussion;

// le modèle défini correspond à la classe lui-même
console.log(Discussion === sequelize.models.Discussion); // true

// synchronise les nouvelles valeurs avec les valeurs actuelles
Discussion.sync(/*{ alter:true }*/);
