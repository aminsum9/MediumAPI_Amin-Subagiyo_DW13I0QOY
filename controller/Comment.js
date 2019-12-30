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

//GET Comment by Article id
exports.showComments = (req, res) => {
  const articleId = req.params.article_id;
  Comments.findAll({
    where: { article_id: articleId },
    attributes: ["id", "comment", "createdAt", "updatedAt"]
    //if using include, id comment not sincron with phpmyadmin
    // include: {
    //   model: Articles,
    //   as: "article",
    //   attributes: ["id", "title"]
    // }
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
