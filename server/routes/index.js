var express = require('express');
var router = express.Router();
const webpush = require('web-push');

const vapidkeys = {
  publicKey: 'BP6E5pOfRrr7dqhpgV8auSJ3pwu6qDIUXm4txhoz5vck8KPqJB0drawCDBY5F4Z0Zipp6vf85iN3J62dG_6XiuY',
  privateKey: 'XnjOAdhMFmumE0uLznXiwogC-bfsGCVWAWP_Eu3luyc'
};
console.log(vapidkeys);
webpush.setVapidDetails('mailto:viveksai26@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);
const subscriptions = [];
/* GET home page. */
router.get('/newsletter', function (req, res, next) {
  const notificationPayload = {
    notification: {
      title: 'Angular News',
      body: 'Newsletter Available!',
      icon: 'assets/main-page-logo-small-hat.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Go to the site'
        }
      ]
    }
  };

  Promise.all(subscriptions.map((sub) => webpush.sendNotification(sub, JSON.stringify(notificationPayload))))
    .then(() => res.status(200).json({ message: 'Newsletter sent successfully.' }))
    .catch((err) => {
      console.error('Error sending notification, reason: ', err);
      res.sendStatus(500);
    });
});
router.get('/subscribers', function (req, res, next) {
  res.status(200).json(subscriptions);
});
router.post('/subscribe', function (req, res, next) {
  const sub = req.body;
  console.log('Received Subscription on the server: ', sub);
  subscriptions.push(sub);
  res.status(200).json({ message: 'Subscription added successfully.' });
});

module.exports = router;
