const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const User = require('./User');
const Discussion = require('./Discussion')

//Modèle Message
const Message = sequelize.define('Message',
{
    //Les attributs du modèle
    id: 
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    message:
    {
        type:DataTypes.STRING(10000),
        allowNull:false
    },
    discussionId:
    {
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, 
{
    tableName:"groupomania_message"
}); 
 
//Liaison avec le modèle User
Message.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Message, {foreignKey: 'userId'});

//Liaison avec le modèle Discussion
Message.belongsTo(Discussion, {foreignKey: 'discussionId'});
Discussion.hasMany(Message, {foreignKey: 'discussionId'});

//Export du modèle
module.exports = Message;

// le modèle défini correspond à la classe lui-même
console.log(Message === sequelize.models.Message); // true

// synchronise les nouvelles valeurs avec les valeurs actuelles
Message.sync(/*{ alter:true }*/); 