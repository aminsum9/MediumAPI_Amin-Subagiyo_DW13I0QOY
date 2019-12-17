'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    is_published: DataTypes.TINYINT,
    is_archived: DataTypes.TINYINT,
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    Comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};