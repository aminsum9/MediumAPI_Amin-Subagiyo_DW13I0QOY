const Categories = require("../models").categories;

/* Task 1 */
//GET data Category
exports.showCategory = (req, res) => {
  Categories.findAll({}).then(data => res.send(data));
};

//POST data Category
exports.createCategory = (req, res) => {
  Categories.create(req.body).then(categories => {
    res.send({
      Message: "success",
      categories
    });
  });
};

//DELETE Category
exports.deleteCategory = (req, res) => {
  Categories.destroy({ where: { id: req.params.id } }).then(data =>
    res.send({
      message: `Category id = ${req.params.id} deleted`,
      data
    })
  );
};
