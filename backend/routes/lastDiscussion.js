const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const discussionCtrl = require('../controllers/discussion');

router.get('/', discussionCtrl.getAllLimit);


module.exports = router;