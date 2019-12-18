const Categories = require("../models").categories;
const Articles = require("../models").articles;
const Users = require("../models").users;

/* Task 2 */
//GET all Article
exports.allarticle = (req, res) => {
  Articles.findAll({
    attributes: {
      include: "id",
      exclude: ["category_id", "is_archived", "is_published", "author_id"]
    }
  }).then(data => res.send(data));
};

//GET spesifik Article
exports.specificArticle = (req, res) => {
  const { id } = req.params;

  Articles.findOne({
    where: {
      id
    }
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
