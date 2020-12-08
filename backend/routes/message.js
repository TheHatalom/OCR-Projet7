const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/message');

//Création des routes
router.get('/', auth, messageCtrl.getAll);
router.post('/', auth, messageCtrl.create);
router.put('/:id', auth, messageCtrl.modify);
router.delete('/:id', auth, messageCtrl.delete);
router.delete('/deleteAll/:discussionId', auth, messageCtrl.deleteAll);

//Export du modèle
module.exports = router;