// GET popular article

// List feature still with dummy data

/* Task 4 */
// CREATE all article
// exports.store = (req, res) => {
//   Articles.create(req.header, { where: {} }).then(Articles => {
//     res.send({
//       message: "success",
//       Articles
//     });
//   });
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
