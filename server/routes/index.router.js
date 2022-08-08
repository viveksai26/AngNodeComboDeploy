var express = require('express');
var router = express.Router();
const subscriptionRouter = require('./subscription.router');
const dashboardRouter = require('./dashboard.router');
const testRouter = require('./test.router');
const { isAuthorized } = require('../auth/auth');

/* GET home page. */
router.use('/dashboard', dashboardRouter);
router.use('/subscription', isAuthorized, subscriptionRouter);

module.exports = router;
