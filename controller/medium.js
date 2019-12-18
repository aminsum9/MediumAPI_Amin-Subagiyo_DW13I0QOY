const Categories = require("../models").Categories;
const Articles = require("../models").Article;

/* Task 1 */
//GET data Category
exports.index = (req, res) => {
  Categories.findAll().then(Categories => res.send(Categories));
};

//GET data spesifik Category
exports.createcategory = (req, res) => {
  Categories.create(req.body).then(Categories => {
    res.send({
      Message: "success"
    });
  });
};

/* Task 2 */
//GET all Article
exports.allarticle = (req, res) => {
  Articles.findAll().then(Articles => res.send(Articles));
};

// GET popular article

// List feature still with dummy data

/* Task 4 */
// CREATE all article
exports.store = (req, res) => {
  Articles.create(req.header, { where: {} }).then(Articles => {
    res.send({
      message: "success",
      Articles
    });
  });
};

//sequelized
// exports.indexdb = (req, res) => {
//   connection.query("SELECT * FROM todos", (err, rows) => {
//     if (err) throw err;

//     res.send(rows);
//   });
// };

// exports.showdb = (req, res) => {
//   connection.query(
//     `SELECT * FROM todos WHERE id = ${req.params.id}`,
//     (err, rows) => {
//       if (err) throw err;

//       req.send(rows[0]);
//     }
//   );
// };
