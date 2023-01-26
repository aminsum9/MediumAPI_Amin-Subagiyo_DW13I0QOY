const jwt = require("jsonwebtoken");
const models = require("../models");
const Users = models.users;

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (password == "failed" || password == null || email == null) {
    res.send({
      error: true,
      success: false,
      message: "password tidak boleh kosong"
    });

  } else if (email && password) {
    Users.findOne({
      where: { email, password }
    }).then(user => {
      if (user) {
        const token = jwt.sign({ id: user.id }, "amin");
        res.send({
          success: true,
          user,
          token
        });
      } else {
        res.send({
          error: true,
          success: false,
          message: "email atau password anda salah"
        });
      }
    });
  } else {
    res.send({
      error: true,
      success: false,
      message: "mohon isi email dan password anda!"
    });
  }
};
