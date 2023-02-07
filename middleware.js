const jwt = require("jsonwebtoken");

exports.authenticated = (req, res, next) => {
  let authHeader = req.headers["authorization"];

  if (!authHeader) {
    console.log("need header");
  }
  let token = authHeader.split("Bearer ")[1];
  console.log( process.env.JWT_TOKEN, ' ----- process.env.JWT_TOKEN')
  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Your Token is Longer Valid" });
    }

    userId = decoded.id;
    next();
  });
};
