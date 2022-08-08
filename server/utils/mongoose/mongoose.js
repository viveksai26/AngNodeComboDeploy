let configuration = {};
try {
  configuration = require('../../config.json');
} catch {
  console.log(configuration);
}

try {
  const mongoose = require('mongoose');

  var uri = process.env.MONGO_URL || configuration?.MONGO_URL;

  mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
    connection.useDb('user');
  });
} catch (err) {
  console.log(err);
}
