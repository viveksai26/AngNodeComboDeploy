module.exports.isAuthorized = function (req, res, next) {
  if (false) {
    next();
  } else {
    var err = new Error('Not authorized! Go back!');
    err.status = 401;
    next(err);
  }
};
