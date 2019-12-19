const Categories = require("../models").categories;
const Articles = require("../models").articles;
const Users = require("../models").users;

/* Task 2 */
//GET all Article
exports.allarticle = (req, res) => {
  console.log("Processing func -> Add Category");
  Articles.findAll({
    attributes: {
      include: "id",
      exclude: ["category_id", "is_archived", "is_published", "author_id"]
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
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

//GET pupular article(10 latest article)
exports.getPopular = (req, res) => {
  Articles.findAll({
    attributes: {
      include: "id",
      exclude: ["category_id", "is_archived", "is_published", "author_id"]
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
    },
    where: {
      is_published: 1,
      is_archived: 0
    },
    order: [["createdAt", "DESC"]],
    limit: 10
  }).then(data => res.send(data));
};
