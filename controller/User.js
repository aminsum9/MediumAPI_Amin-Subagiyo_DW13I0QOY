const Users = require("../models").users;
const Follows = require("../models").follow;

/* Task 10 */
// exports.login = (req, res) => {
//     Users.
// }
/* Task 11 */
//Register
exports.register = (req, res) => {
  Users.create(req.body).then(data => {
    res.send({
      Message: "success",
      data
    });
  });
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
