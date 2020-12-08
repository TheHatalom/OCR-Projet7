const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const discussionCtrl = require('../controllers/discussion');

//Création des routes
router.get('/limit', auth, discussionCtrl.getAllLimit);
router.get('/:id', auth, discussionCtrl.getOne);
router.get('/', auth, discussionCtrl.getAll);
router.post('/', auth, discussionCtrl.create);
router.put('/:id', auth, discussionCtrl.modify);
router.delete('/:id', auth, discussionCtrl.delete);

//Export des routes
module.exports = router;