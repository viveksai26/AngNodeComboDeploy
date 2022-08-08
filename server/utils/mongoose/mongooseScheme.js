const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employee = new Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    location: {
      type: String
    }
  },
  { collection: 'Employees' }
);
const notification = new Schema(
  {
    email: {
      type: String
    },
    token: {
      type: String
    }
  },
  { collection: 'Notification' }
);

module.exports.employee = mongoose.model('employees', employee);
module.exports.notification = mongoose.model('notification', notification);
