const Categories = require("../models").Categories;

//GET data
exports.index = (req, res) => {
  Categories.findAll().then(Categories => res.send(Categories));
};

//GET data dengan id tertentu
exports.show = (req, res) => {
  Categories.findOne({ where: { name: req.params.name } }).then(Categories =>
    res.send(Categories)
  );
};

// //POST data lewat body
// exports.create = (req, res) => {
//   const data = req.body;
//   accounts.push(data);
//   res.send(data);
// };

// //POST update data lebih spesifik
// exports.update = (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   const data = req.body;
//   console.log(id, index, data);
//   accounts[index] = { ...accounts[index], ...data };
//   res.send(accounts[index]);
// };

// //DELETE data
// exports.delete = (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   accounts.splice(index, 1);
//   res.send(accounts);
// };

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
