const Users = require("../models").users;

/* Task 10 */

/* Task 11 */
exports.register = (req, res) => {
  Users.create(req.body).then(data => {
    res.send({
      Message: "success",
      data
    });
  });
};
