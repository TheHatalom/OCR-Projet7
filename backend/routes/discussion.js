const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const discussionCtrl = require('../controllers/discussion');

router.get('/limit', discussionCtrl.getAllLimit);
router.get('/:id', discussionCtrl.getOne);
router.get('/', discussionCtrl.getAll);
router.post('/', discussionCtrl.create);
router.put('/:id', auth, discussionCtrl.modify);
router.delete('/:id', auth, discussionCtrl.delete);

module.exports = router;