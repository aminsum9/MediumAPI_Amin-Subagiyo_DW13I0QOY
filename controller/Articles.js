const Categories = require("../models").categories;
const Articles = require("../models").articles;
const Users = require("../models").users;

/* Task 2 */
//GET all Article
exports.allarticle = (req, res) => {
  Categories.findAll({
    include: [
      {
        model: Users,
        as: "users",
        through: {
          model: Articles
        }
      }
    ]
  }).then(data => res.send(data));
};

//ADD article
exports.addArticle = (req, res) => {
  Articles.create(req.body).then(data =>
    res.send({
      message: "success add article",
      data
    })
  );
};
