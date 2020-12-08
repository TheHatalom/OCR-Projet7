const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

//Création des routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', auth, userCtrl.getAll);
router.put('/:id', userCtrl.modify);
router.delete('/:id', auth, userCtrl.delete);

//Export du modèle
module.exports = router;