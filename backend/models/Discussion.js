const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const User = require('./User')

const Discussion = sequelize.define('Discussion',
{
    // Model attributes are defined here
    id:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    // Model attributes are defined here
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
    }
}, 
{
    tableName:"groupomania_discussion"
});

Discussion.belongsTo(User, {foreignKey: 'username'});


module.exports = Discussion;

// le modèle défini correspond à la classe lui-même
console.log(Discussion === sequelize.models.Discussion); // true

// synchronise les nouvelles valeurs avec les valeurs actuelles
Discussion.sync(/*{ alter:true }*/);
