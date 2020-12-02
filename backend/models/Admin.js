const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const User = require('./User')

const Admin = sequelize.define('Admin',
{
    // Model attributes are defined here
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
        allowNull:false,
        defaultValue:"member"
    },
    code:
    {
        type:DataTypes.STRING(3),
        allowNull:false,
        defaultValue:"mbr"
    }
}, 
{
    tableName:"groupomania_admin"
});

Admin.belongsTo(User, {foreignKey: 'userId'});
User.hasOne(Admin, {foreignKey: 'userId'});

module.exports = Admin;

// le modèle défini correspond à la classe lui-même
console.log(Admin === sequelize.models.Admin); // true

// synchronise les nouvelles valeurs avec les valeurs actuelles
Admin.sync(/*{ alter:true }*/);