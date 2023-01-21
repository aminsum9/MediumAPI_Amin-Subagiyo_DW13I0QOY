const Users = require("../models").users;
const Follows = require("../models").follow;

/* Task 10 */
// exports.login = (req, res) => {
//     Users.
// }
/* Task 11 */
//Register
exports.register = (req, res) => {
  if (
    req.body.fullname == null ||
    req.body.username == null ||
    req.body.email == null ||
    req.body.password == null
  ) {
    res.send({
      message: "complete your data before!"
    });
  } else if (req.body.password.length < 8) {
    res.send({
      message: "your password must be create at least 8 characters!"
    });
  } else {
    Users.create(req.body).then(data => {
      res.send({
        message: "success",
        data
      });
    });
  }
};
//GET All Users
exports.getAllUsers = (req, res) => {
  Users.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    include: {
      model: Follows
    }
  }).then(data => res.send(data));
};
