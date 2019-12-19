const jwt = require("jsonwebtoken");
const models = require("../models");
const Users = models.users;

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  Users.findOne({ where: { email, password } }).then(user => {
    if (user) {
      const token = jwt.sign({ user_id: user.id }, "my-screet-key");
      res.send({
        user,
        token
      });
    } else {
      res.send({
        error: true,
        message: "Wrong email or password"
      });
    }
  });
};
