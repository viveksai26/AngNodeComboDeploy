var express = require('express');
var router = express.Router();
const subscriptionController = require('../controllers/subscription.controller');

/* GET home page. */
router.get('/newsletter', subscriptionController.newsletter);
router.get('/subscribers', subscriptionController.subscribers);
router.get('/clearSubscriptions', subscriptionController.clearSubscriptions);
router.post('/subscribe', subscriptionController.subscribe);

module.exports = router;
