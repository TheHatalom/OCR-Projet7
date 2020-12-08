const Message = require('../models/Message');
const fs = require('fs');

//Récupération de tous les messages
exports.getAll = (req, res, next) => 
{
    Message.findAll().then((message) => 
    {
        //if limit alors ajout limit paramter
        res.status(200).json(message);
    })
    .catch((error) => 
    {
        res.status(400).json(
        {
            error: error
        });
    });
};

//Création d'un message
exports.create = (req, res, next) => 
{
    console.log(req.body);
    const messageObject = req.body;
    const message = new Message(
    {
        ...messageObject
    });
    message.save()
    .then((result) => res.status(201).json(
    {
        id: result.id,
        message: 'Message enregistré !'
    }))
    .catch(error => res.status(400).json(
    { 
        error: error
    }));
};

//Modification d'une message
exports.modify = (req, res, next) => 
{
    const messageObject = req.body;
    Message.update(
    { 
        ...messageObject
    }, 
    { 
        where: {id: req.params.id} 
    })
    .then(() => res.status(200).json(
    { 
        message: 'Message modifié !'
    }))
    .catch(error => res.status(400).json(
    { 
        error: error
    }));
};

//Suppression d'un message
exports.delete = (req, res, next) => 
{
    Message.findOne(
    { 
        _id: req.params.id 
    })
    Message.destroy(
    {
        where: {id: req.params.id}
    })
    .then(() => res.status(200).json(
    { 
        message: 'Message suprimé !'
    }))
    .catch(error => res.status(500).json(
    { 
        error: error
    }));
};

//Suppression de tous les messages
exports.deleteAll = (req, res, next) => 
{
    Message.findAll(
    {
        where: {discussionId: req.params.discussionId}
    })
    Message.destroy(
    {
        where: {discussionId: req.params.discussionId}
    })
    .then(() => res.status(200).json(
    { 
        message: 'Messages suprimés !'
    }))
    .catch(error => res.status(500).json(
    { 
        error: error
    }));
};