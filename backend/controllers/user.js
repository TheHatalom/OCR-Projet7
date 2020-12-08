const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const User = require('../models/User');
const Role = require('../models/Role');

//Création d'un user
exports.signup = (req, res, next) => 
{ 
    bcrypt.hash(req.body.password, 10)
    .then(hash => 
    {
        const user = new User(
        {
            username : req.body.username,
            email : req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json(
        { 
            message: 'Utilisateur créé !' 
        }))
        .catch(error => res.status(400).json(
        { 
            error: error
        }));
    })
    .catch(error => res.status(500).json(
    { 
        error: error
    }));
};

//Connexion d'une user
exports.login = (req, res, next) => 
{
    User.findOne( 
    {
        where: {email: req.body.email },
        include: [{model: Role}]
    })
    .then(user =>
    {
        if (!user) 
        {
            return res.status(401).json(
            { 
                error: 'Utilisateur non trouvé !' 
            });
        }
        console.log(user);
        bcrypt.compare(req.body.password, user.password)
        .then(valid => 
        {
            if (!valid) 
            {
                return res.status(401).json(
                { 
                    error: 'Mot de passe incorrect !' 
                });
            }
            res.status(200).json(
            {
                role: user.Role.code,
                userId: user.id,
                token: jwt.sign(
                { userId: user._id },
                'GROUPOMANIATOKEN',
                { expiresIn: '24h' })
            });
        })
        .catch(error => res.status(500).json(
        { 
            error 
        }));
    })
    .catch(error => res.status(500).json(
    { 
        error 
    }));
};

//Récupération de tous les users
exports.getAll = (req, res, next) => 
{
    User.findAll().then((user) => 
    {
        res.status(200).json(user);
    })
    .catch((error) => 
    {
        res.status(400).json(
        {
            error: error
        });
    });
};


//Modification d'un user
exports.modify = (req, res, next) => 
{
    const userObject = req.body;
    User.update(
    { 
        ...userObject
    }, 
    { 
        where: {id: req.params.id} 
    })
    .then((result) => res.status(200).json(
    {
        id: result.id,
        message: "Rôle de l'utilisateur modifié !"
    }))
    .catch(error => res.status(400).json(
    { 
        error: error
    }));
};

//Suppression d'un user
exports.delete = (req, res, next) => 
{
    User.findOne(
    { 
        _id: req.params.id 
    })
    User.destroy(
    {
        where: {id: req.params.id}
    })
    .then(() => res.status(200).json(
    { 
        message: 'Utilisateur suprimé !'
    }))
    .catch(error => res.status(500).json(
    { 
        error: error
    }));
};