const Categories = require("../models").categories;

/* Task 1 */
//GET data Category
exports.showcategory = (req, res) => {
  Categories.findAll().then(data => res.send(data));
};

//POST data spesifik Category
exports.createcategory = (req, res) => {
  Categories.create(req.body).then(Categories => {
    res.send({
      Message: "success",
      Categories
    });
  });
};
