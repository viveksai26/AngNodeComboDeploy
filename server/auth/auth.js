var jwtDecode = require('jwt-decode');

const validEmails = ['viveksai26@gmail.com'];

module.exports.isAuthorized = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (authHeader && validEmails.includes(jwtDecode(authHeader).email)) {
    next();
  } else {
    var err = new Error('Not authorized! Go back!');
    err.status = 401;
    next(err);
  }
};
