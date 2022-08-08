var express = require('express');
var subscriptionRouter = express.Router();
const subscriptionController = require('../controllers/subscription.controller');

subscriptionRouter.get('/newsletter', subscriptionController.newsletter);
subscriptionRouter.get('/subscribers', subscriptionController.subscribers);
subscriptionRouter.get('/clearSubscriptions', subscriptionController.clearSubscriptions);
subscriptionRouter.post('/subscribe', subscriptionController.subscribe);

module.exports = subscriptionRouter;
