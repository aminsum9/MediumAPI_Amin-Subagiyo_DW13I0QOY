const jwt = require("express-jwt");

const isLogginIn = true;

exports.authenticated = (req, res, next) => {
  if (isLogginIn) {
    next();
  } else {
    res.send({
      Message: "You are unauthenticated"
    });
  }
};

// exports.auth = jwt({
//   secret: "amin"
// });

// exports.authorized = (req, res, next) => {
//   if (req.user.id != req.params.createdBy) {
//     return res.status(401).json({ message: "You are not authenticated." });
//   }
//   next();
// };

// exports.authenticated = jwt({ secret: "amin" });
