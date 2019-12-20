const Comment = require("../models").comment;
const Articles = require("../models").articles;

function getIdFromObject(data) {
  let id = JSON.stringify(data);
  id = id.split(",");
  id = id[0].substring(6, data.length);
  return id;
}
/* Task 6 */
//ARR comment -- belum selesai
exports.AddComment = (req, res) => {
  Comment.create(req.body).then(data => {
    let commentId = getIdFromObject(data);
    Comment.findOne({
      attributes: ["id", "comment"],
      include: [{ model: Articles }],
      where: { id: commentId }
    }).then(response => {
      res.send(response);
    });
  });
};
