const Categories = require("../models").categories;

/* Task 1 */
//GET data Category
exports.showcategory = (req, res) => {
  Categories.findAll({}).then(data => res.send(data));
};

//POST data Category //masih gagal
exports.createcategory = (req, res) => {
  Categories.create(req.body).then(categories => {
    res.send({
      Message: "success"
    });
  });
};
