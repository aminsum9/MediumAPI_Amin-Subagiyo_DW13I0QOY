const Comments = require("../models").comment;
const Articles = require("../models").articles;
const Users = require("../models").users;

function getIdFromObject(data) {
  let id = JSON.stringify(data);
  id = id.split(",");
  id = id[0].substring(6, data.length);
  return id;
}
/* Task 6 */
//ADD comment
exports.AddComment = (req, res) => {
  const article_id = req.params.article_id;
  const comment = req.body.comment;
  Comments.create({
    comment,
    article_id
  }).then(data => res.send(data));
  // let commentId = getIdFromObject(data);
  // Comment.findOne({
  //   attributes: ["id", "comment"],
  //   include: [{ model: Articles }],
  //   where: { id: commentId }
  // }).then(response => {
  //   res.send(response);
  // });
  // );
};

//UPDATE Comment
exports.updateComment = (req, res) => {
  const { id } = req.params;
  Comments.update(req.body, {
    where: {
      id
    }
  }).then(data =>
    res.send({
      messsage: "success update data",
      data
    })
  );
};

//GET All Comment
exports.showComments = (req, res) => {
  Comments.findAll({
    attributes: ["id", "comment"],
    include: [
      {
        model: Articles
      }
    ]
  }).then(data => res.send(data));
};

//DELETE Comment
exports.deleteComment = (req, res) => {
  Comments.destroy({ where: { id: req.params.id } }).then(data =>
    res.send({
      message: `Comment id ${req.params.id} success deeleted`
    })
  );
};