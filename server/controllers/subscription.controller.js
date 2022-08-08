const webpush = require('web-push');
const notification = require('../utils/mongoose/mongooseScheme');
let configuration = {};
try {
  configuration = require('../../config.json');
} catch {
  console.log(configuration);
}
const vapidkeys = {
  publicKey: process.env.VPAID_PUBLIC || configuration?.VPAID_PUBLIC,
  privateKey: process.env.VPAID_PRIVATE || configuration?.VPAID_PRIVATE
};
webpush.setVapidDetails('mailto:viveksai26@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);
class subscriptionController {
  constructor() {}
  static async newsletter(req, res, next) {
    var message = req.query.message;
    var title = req.query.title;
    const notificationPayload = {
      notification: {
        title,
        body: message,
        icon:
          'https://cdn4.iconfinder.com/data/icons/happy-easter-5/64/easter_rabbit_bunny_holiday_animal_happy_cute-512.png',
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

    notification.notification.find().then((data) => {
      console.log(data);
      res.status(200).json({ message: 'Newsletter sent successfully.' });
      data.forEach((val) => {
        webpush.sendNotification(val, JSON.stringify(notificationPayload)).catch((error) => {
          console.log(error);
          // const index = subscriptions.indexOf(sub);
          // if (index > -1) {
          // subscriptions.splice(index, 1);
          // }
        });
      });
    });
  }
  static async subscribers(req, res, next) {
    notification.notification.find().then((data) => res.status(200).json(data));
  }
  static async clearSubscriptions(req, res, next) {
    notification.notification.deleteMany(() => true);
    res.status(200).json('subscriptions cleared');
  }
  static async subscribe(req, res, next) {
    const sub = req.body;
    console.log('Received Subscription on the server: ', sub);
    notification.notification.insertMany(sub, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
    res.status(200).json({ message: 'Subscription added successfully.' });
  }
}
module.exports = subscriptionController;
