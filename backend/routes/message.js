const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/message');

router.get('/', messageCtrl.getAll);
router.post('/', messageCtrl.create);
router.put('/:id', messageCtrl.modify);
router.delete('/:id', messageCtrl.delete);

module.exports = router;