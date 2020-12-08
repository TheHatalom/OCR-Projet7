const Discussion = require('../models/Discussion');
const Message = require('../models/Message');
const User = require('../models/User');
const fs = require('fs');

//Récupération d'une discussion
exports.getOne = (req, res, next) => 
{   
    Discussion.findOne(
    {
        include: 
        {
            model: Message,
            include:User
        },
        where: {id: req.params.id}
    })
    .then((discussion) => 
    {
      res.status(200).json(discussion);
    }
    )
    .catch((error) => 
    {
        res.status(404).json(
        {
            error: error
        });
    });
}; 

//Récupération de toutes les discussions
exports.getAll = (req, res, next) => 
{
    Discussion.findAll().then((discussion) => 
    {
        res.status(200).json(discussion);
    })
    .catch((error) => 
    {
        res.status(400).json(
        {
            error: error
        });
    });
};

//Récupération des 5 dernières discussions
exports.getAllLimit = (req, res, next) => 
{
    //add number of element to return if limit parameter is send
    Discussion.findAll(
    {
        limit: 5,
        order: [["createdAt", "DESC"]]
    }
    ).then((discussion) => 
    {
        res.status(200).json(discussion);
    })
    .catch((error) => 
    {
        res.status(400).json(
        {
            error: error
        });
    });

};

//Création d'une discussion
exports.create = (req, res, next) => 
{
    console.log(req.body);
    const discussionObject = req.body;
    const discussion = new Discussion(
    {
        ...discussionObject
    });
    discussion.save()
    .then((result) => res.status(201).json(
    {
        id: result.id,
        message: 'Discussion enregistrée !'
    }))
    .catch(error =>
    {
        console.log(error);
        res.status(400).json(
        { 
            error: error
        });
    });
};

//Modification d'une discussion
exports.modify = (req, res, next) => 
{
    console.log("req : " + req.body.message);
    const discussionObject = req.body;
    Discussion.update(
    { 
        ...discussionObject
    }, 
    { 
        where: {id: req.params.id} 
    })
    .then((result) => res.status(200).json(
    {
        id: result.id,
        message: 'Discussion modifiée !'
    }))
    .catch(error => res.status(400).json(
    { 
        error: error
    }));
};

//Suppression d'une discussion
exports.delete = (req, res, next) => 
{
    Discussion.findOne(
    { 
        _id: req.params.id 
    })
    Discussion.destroy(
    {
        where: {id: req.params.id}
    })
    .then(() => res.status(200).json(
    { 
        message: 'Discussion suprimée !'
    }))
    .catch(error => res.status(500).json(
    { 
        error: error
    }));
};
