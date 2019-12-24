const Follows = require("../models").follow;
const Users = require("../models").users;

//Add Follower -- userId not match, response sorry
exports.follow = (req, res) => {
  request = {
    user_id: userId,
    follower_user_id: req.body.follower_user_id
  };
  if (userId !== req.body.user_id) {
    Follows.create(request).then(data => {
      Follows.findOne({
        attributes: ["id"],
        include: [
          {
            model: Users
          }
        ],
        where: { id: data.id }
      }).then(response => {
        res.send(response);
      });
    });
  } else {
    res.send({ message: "sorry " });
  }
};

// exports.follow = (req, res) => {
//   Follows.create(req.body).then(data => res.send(data));
// };

//GET All Follow
exports.getAllFollow = (req, res) => {
  Follows.findAll({
    attributes: ["id", "user_id", "follower_user_id"]
  }).then(data => res.send(data));
};
