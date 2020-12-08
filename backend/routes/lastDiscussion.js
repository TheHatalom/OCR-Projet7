const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const discussionCtrl = require('../controllers/discussion');

//Création de la route
router.get('/', auth, discussionCtrl.getAllLimit);

//Export de la route
module.exports = router;