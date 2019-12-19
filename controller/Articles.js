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
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
    }
  }).then(data => res.send(data));
};

//GET pupular article(10 latest article)
console.log("Processing func -> 10 latest article");
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

/* Task 3 */
//GET Article by Category
exports.articleByCategory = (req, res) => {
  const { category_id } = req.params;

  Articles.findAll({
    where: {
      category_id
    },
    attributes: {
      include: "id",
      exclude: [
        "content",
        "image",
        "category_id",
        "is_published",
        "is_archived",
        "author_id",
        "createdAt",
        "updatedAt"
      ]
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
    }
  }).then(data => res.send(data));
};

/* Task 4 */
//ADD article // belum selesai
exports.addArticle = (req, res) => {
  Articles.create(req.body).then(data =>
    res.send({
      message: "success add article",
      data
    })
  );
};
// DELETE article
exports.deleteArticle = (req, res) => {
  Articles.destroy({ where: { id: req.params.id } }).then(data =>
    res.send({
      message: "article successfully delete",
      data
    })
  );
};
// UPDATE article
exports.updateArticle = (req, res) => {
  Articles.update(req.body, { where: { id: req.params.id } }).then(data =>
    res.send({
      Message: "article update successfully",
      data
    })
  );
};

/* Task 5 */
//GET detail Article // belum ada follownya
exports.getDetailArticle = (req, res) => {
  const { id } = req.params;
  Articles.findOne({
    where: {
      id
    },
    attributes: {
      include: "id",
      exclude: ["category_id", "is_published", "is_archived", "author_id"]
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
    }
  }).then(data => res.send(data));
};

/* Task 9 */

//belum selesai
// exports.articleByPerson = (req, res) => {
//   const { user_id } = req.params;
//   Articles.findOne({
//     where: {
//       user_id
//     }
//   });
// };
