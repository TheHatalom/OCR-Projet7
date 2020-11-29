const Message = require('../models/Message');
const fs = require('fs');

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

exports.create = (req, res, next) => 
{
    console.log(req.body);
    const messageObject = req.body;
    const message = new Message(
    {
        ...messageObject
    });
    message.save()
    .then(() => res.status(201).json(
    { 
        message: 'Message enregistrée !'
    }))
    .catch(error => res.status(400).json(
    { 
        error: error
    }));
};

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
        message: 'Message modifiée !'
    }))
    .catch(error => res.status(400).json(
    { 
        error: error
    }));
};

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
        message: 'Message suprimée !'
    }))
    .catch(error => res.status(500).json(
    { 
        error: error
    }));
};