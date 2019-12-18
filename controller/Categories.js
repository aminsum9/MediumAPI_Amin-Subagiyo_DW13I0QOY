const Categories = require("../models").Categories;

/* Task 1 */
//GET data Category
exports.showcategory = (req, res) => {
  Categories.findAll().then(Categories => res.send(Categories));
};

//POST data spesifik Category
exports.createcategory = (req, res) => {
  Categories.create(req.body).then(Categories => {
    res.send({
      Message: "success"
    });
  });
};
