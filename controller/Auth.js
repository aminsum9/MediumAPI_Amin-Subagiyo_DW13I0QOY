const jwt = require("jsonwebtoken");
const models = require("../models");
const Users = require("../models").users;

// exports.login = (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   Users.findOne({ where: { email, password } }).then(user => res.send(
//     if (user){
//       const token = jwt.sign({ user_id: user.id }, 'amin');
//       res.send({
//         user,
//         token
//       })
//     } else {
//       res.send({
//         error: true,
//         Message: "Wrong Email and Password"
//       })
//     }
//   ));
// };

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

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
};

// exports.register = (req, res) => {
//   Users.create(req.body).then(user => {
//     const token = jwt.sign({ id: user.id }, "amin");
//     res.send({
//       email: user.email,
//       token
//     });
//   });
// };
