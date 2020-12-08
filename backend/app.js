const express = require('express');
const path = require('path');
const {Sequelize, Model, DataTypes} = require('sequelize');
const bodyParser = require('body-parser');
const app = express();

//Import des routes
const userRoutes = require('./routes/user');
const discussionRoutes = require('./routes/discussion');
const lastDiscussionRoutes = require('./routes/lastDiscussion');
const messageRoutes = require('./routes/message');



//Headers requête API
app.use((req, res, next) => 
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/user', userRoutes);
app.use('/api/discussion', discussionRoutes);
app.use('/api/lastDiscussion', lastDiscussionRoutes);
app.use('/api/message', messageRoutes);

module.exports = app;
