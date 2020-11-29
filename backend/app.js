const express = require('express');
const path = require('path');
const {Sequelize, Model, DataTypes} = require('sequelize');
const bodyParser = require('body-parser');
const app = express();

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

/*
app.post('/api/sauces', (req, res, next) => 
{
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
});

app.use('/api/sauces', (req, res, next) => 
{
    const sauces = [
    {
        _id: 'oeihfzeoi',
        userId: 'user100',
        name: 'Mayonnaise',
        manufacturer: 'So Pekocko',
        description: 'Sauce classique à base d\'oeuf',
        mainPepper: 'Oeuf',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        heat: 1,
        likes: 5,
        dislikes: 1,
        userLiked: [],
        userDisliked: []
    },
    {
        _id: 'gfsdfgdfgdgf',
        userId: 'user101',
        name: 'Ketchup',
        manufacturer: 'So Pekocko',
        description: 'Sauce classique à base de tomate',
        mainPepper: 'Tomate',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        heat: 2,
        likes: 8,
        dislikes: 2,
        userLiked: [],
        userDisliked: []
    },
    ];
    res.status(200).json(sauces);
  });
  */