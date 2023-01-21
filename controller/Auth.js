const jwt = require("jsonwebtoken");
const models = require("../models");
const Users = models.users;

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (password == "failed" || password == null || email == null) {
    // console.log(kpassword);
    res.send({
      error: true,
      message: "fill your email or your password before"
    });
  } else if (email != null || password != null) {
    Users.findOne({
      where: { email, password }
    }).then(user => {
      if (user) {
        const token = jwt.sign({ id: user.id }, "amin");
        res.send({
          user,
          token
        });
      } else {
        res.send({
          error: true,
          message: "wrong email or password"
        });
      }
    });
  } else {
    res.send({
      error: true,
      message: "fill your email or your password before"
    });
  }
};
