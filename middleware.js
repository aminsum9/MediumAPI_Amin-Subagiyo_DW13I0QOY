const jwt = require("express-jwt");

exports.authentication = jwt({ screet: process.env.SCREET_KEY });

exports.authorized = (req, res, next) => {
  if (req.user.id != req.params.user_id) {
    return res.status(401).json({
      message: "You are not authenticate"
    });
  }
  next();
};
