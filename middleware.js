const jwt = require("jsonwebtoken");

exports.authenticated = (req, res, next) => {
  let authHeader = req.headers["authorization"];

  if (!authHeader) {
    console.log("need header");
  }
  let token = authHeader.split("Bearer ")[1];
  console.log(authHeader);

  jwt.verify(token, "amin", (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Your Token is Longer Valid" });
    }

    req.userid = decoded.id;
    next();
  });
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
