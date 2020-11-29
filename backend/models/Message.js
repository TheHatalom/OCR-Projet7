const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const User = require('./User');
const Discussion = require('./Discussion')

const Message = sequelize.define('Message',
{
    // Model attributes are defined here
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
 
Message.belongsTo(User, {foreignKey: 'id'});
Message.belongsTo(Discussion, {foreignKey: 'discussionId'});
Discussion.hasMany(Message, {foreignKey: 'discussionId'});


module.exports = Message;


// le modèle défini correspond à la classe lui-même
console.log(Message === sequelize.models.Message); // true

// synchronise les nouvelles valeurs avec les valeurs actuelles
Message.sync(/*{ alter:true }*/); 